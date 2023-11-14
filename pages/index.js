import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { WishedProduct } from "@/models/WishedProduct";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Setting } from "@/models/Setting";
import Footer from "@/components/Footer";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import ContactUsPage from "./ContactUsPage";


export default function HomePage({
  featuredProduct,
  newProducts,
  wishedNewProducts,
}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />
      <Footer/>
      <Link href="/ContactUsPage">
        <a>
          <ContactButton />
        </a>
      </Link>
    </div>
  );
}
//contact us button 
const ContactButton = () => {
  const handleContactClick = () => {
    // Handle contact button click (e.g., open a contact modal)
    console.log("Contact button clicked");
  };

  return (
    <button
      onClick={handleContactClick}
      style={{
        position: "fixed",
        bottom: "150px",
        right: "20px",
        width: "50px", // Set the width and height to make it circular
        height: "50px",
        backgroundColor: "rgb(76, 175, 80)",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "50%", // Set the border-radius to make it circular
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "rgb(102 163 103 / 67%) 0px 0px 23px 32px",
        outline: "rgb(255 255 255 / 35%) solid 1px",
      }}
    >
      <FaPhone style={{ marginRight: "5px" }} />
    </button>
  );
};
export async function getServerSideProps(ctx) {
  try {
    await mongooseConnect();
    const featuredProductSetting = await Setting.findOne({
      name: "featuredProductId",
    });
    let featuredProductId = null;
    let featuredProduct = null;

    if (featuredProductSetting && featuredProductSetting.value) {
      featuredProductId = featuredProductSetting.value;
      featuredProduct = await Product.findById(featuredProductId);
    }

    const newProducts = await Product.find({}, null, {
      sort: { _id: -1 },
      limit: 10,
    });
    const session = await getServerSession(ctx.req, ctx.res, authOptions);
    let wishedNewProducts = [];

    if (session?.user) {
      wishedNewProducts = await WishedProduct.find({
        userEmail: session.user.email,
        product: newProducts.map((p) => p._id.toString()),
      });
    }

    return {
      props: {
        featuredProduct: featuredProduct
          ? JSON.parse(JSON.stringify(featuredProduct))
          : null,
        newProducts: JSON.parse(JSON.stringify(newProducts)),
        wishedNewProducts: wishedNewProducts.map((i) => i.product.toString()),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        featuredProduct: null,
        newProducts: [],
        wishedNewProducts: [],
      },
    };
  }
}
