import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import CartIcon from "@/components/icons/CartIcon";
import BarsIcon from "@/components/icons/Bars";
import SearchIcon from "@/components/icons/SearchIcon";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from 'next/head';

const StyledHeader = styled.header`
  background-color: rgb(12 11 11);
  position: sticky;
  height: 90px;
  top: 0;
  z-index: 10;
`;
const Logo = styled.a`
  font-family: 'Pacifico', cursive; /* Apply the custom font */
  color: white;
  font-size: 32px; /* Increase font size for emphasis */
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1px 0;
`;
const StyledNav = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: rgb(12 11 11);
  margin: 15px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: white;
  font-size: 20px;
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  svg {
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  &:hover {
    color: white;
    border-bottom: 2px solid white;
  }
  &.active {
    color: black;
    font-weight: bold;
    border-bottom: 2px solid black;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 40px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    min-width: 20px;

    color: white;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px;
  font-size: 12px;
`;

const CartContainer = styled.div`
  position: relative;
  margin:15px;
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/"); // Redirect to the home page after logout
  };

  return (
    <StyledHeader>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
    </Head>
      <Center>
        <Wrapper>
          <Logo href="/">Z-Kart</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">All products</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/account">Account</NavLink>
            {session ? (
              <NavButton onClick={handleLogout}>Logout</NavButton>
            ) : (
              <NavLink href="/login">Login</NavLink>
            )}
          </StyledNav>
          <CartContainer>
            <NavLink href="/cart">
              <CartIcon />
              {cartProducts.length > 0 && <CartCount>{cartProducts.length}</CartCount>}
            </NavLink>
          </CartContainer>
          <SideIcons>
            <Link href="/search">
              <SearchIcon />
            </Link>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
              <BarsIcon />
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
