import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import FlyingButton from "@/components/FlyingButton";
import { RevealWrapper } from "next-reveal";

const Bg = styled.div`
  background-color: rgb(12, 40, 67);
  color: #fff;
  padding: 5px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  img.main {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;

    /* Glowing effect */
    box-shadow: 0 0 20px 0 #0ef;
    outline: 1px solid #0ef;
    border-radius: 10px; /* Adjust the border radius as needed */
  }

  div:nth-child(1) {
    order: 2;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;

    & > div:nth-child(1) {
      order: 0;
    }

    img {
      max-width: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const CenterImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImgColumn = styled(Column)`
  & > div {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  img.main {
    max-width: 100%;
    max-height: 150px;
    display: block;
    margin: 50px auto;
    box-shadow: #9d9fceab 0px 0px 23px 32px;
    outline: rgb(0, 238, 255) solid 1px;
    border-radius: -1px;
  }
`;

const ContentWrapper = styled.div``;

export default function Featured({ product }) {
  if (!product || !product.title) {
    return null; // Return null if product or title is null or undefined
  }

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <RevealWrapper origin={"left"} delay={0}>
                <ContentWrapper>
                  <Title>{product.title}</Title>
                  <Desc>{product.description}</Desc>
                  <ButtonsWrapper>
                    <ButtonLink
                      href={"/product/" + product._id}
                      outline={1}
                      white={1}
                    >
                      Read more
                    </ButtonLink>
                    <FlyingButton
                      white={1}
                      _id={product._id}
                      src={product.images?.[0]}
                    >
                      <CartIcon />
                      Add to cart
                    </FlyingButton>
                  </ButtonsWrapper>
                </ContentWrapper>
              </RevealWrapper>
            </div>
          </Column>
          <ImgColumn>
            <RevealWrapper delay={0}>
              <CenterImg>
                <img className="main" src={product.images?.[0]} alt="" />
              </CenterImg>
            </RevealWrapper>
          </ImgColumn>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
