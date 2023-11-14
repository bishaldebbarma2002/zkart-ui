// AboutUsPrivacyPolicyPage.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUsPrivacyPolicyPage = () => {
    const privacyPolicyText = `
    Your privacy is of utmost importance to us at Zkart. Our Privacy
                    Policy is designed to explain how we collect, use, and protect your
                    personal information when you use our website. We want you to feel
                    secure and confident when interacting with us.
                    We collect minimal personal information necessary for order
                    processing, communication, and providing a personalized shopping
                    experience. Your data is securely stored, and we never share it with
                    third parties. Our commitment to protecting your privacy is
                    unwavering, and we continually review and update our practices to
                    ensure compliance with the latest privacy standards.
                    By using our website, you agree to the terms outlined in this Privacy
                    Policy. We encourage you to read the full Privacy Policy to
                    understand how we safeguard your information.
        At Zkart, we are committed to safeguarding your privacy and ensuring the security of your personal information. This privacy policy outlines how we collect, use, disclose, and protect the information we gather from our users. By using our website, you consent to the terms outlined in this policy.

        We collect personal information when you register on our site, place an order, subscribe to our newsletter, or fill out a form. This information may include your name, email address, mailing address, phone number, and payment details. We use this information to process transactions, send periodic emails, and enhance your overall experience with our services.

        Zkart employs industry-standard security measures to protect your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to third parties unless we provide you with advance notice, except as described below. The term "third parties" excludes our website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you.

        We may disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. Non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.

        Zkart uses cookies to enhance your browsing experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.

        By using our website, you consent to our privacy policy. If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on the date indicated below.

        For any questions regarding this privacy policy, you may contact us using the information provided on our Contact Us page.

        Thank you for entrusting Zkart with your personal information. We are dedicated to protecting your privacy and providing you with a secure online experience.

        Last Updated: [Insert Date]
    `;

    return (
        <div>
            <Header />
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>About Us</h1>
                <p>
                    Welcome to Zkart! We are more than just an online shopping platform.
                    At Zkart, we strive to provide a unique and delightful shopping
                    experience for our customers. Our team is committed to offering a
                    curated selection of high-quality products, ensuring that each
                    purchase brings joy and satisfaction to our valued customers.
                </p>
                <p>
                    Zkart was founded with a vision to create a seamless and secure online
                    shopping environment. Our mission is to connect people with products
                    they love, and we continuously work towards improving and expanding
                    our offerings to meet the diverse needs and preferences of our
                    customers.
                </p>
            </div>
            <hr style={{ margin: "20px" }} />
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h1>Privacy Policy</h1>
                <div dangerouslySetInnerHTML={{ __html: privacyPolicyText }} />
            </div>
            <Footer />
        </div>
    );
};

export default AboutUsPrivacyPolicyPage;
