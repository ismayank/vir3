const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PSO2SEh6vqdeZUgGTxfdefYynEeipmyAEiEJ6ewcbR9gWOMxasXSGAaI8cjFVXLhopZyMGbmyAB9VC6i7GwdS2800VGfo3yxh");

app.use(express.json());
app.use(cors());

// Checkout API
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;
    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.name, // Use product name from the request
            },
            unit_amount: product.price * 100, // Convert price to paise (e.g., ₹50 to 5000 paise)
        },
        quantity: 1,
    }));

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(7001, () => {
    console.log("Server started on port 7001");
});
