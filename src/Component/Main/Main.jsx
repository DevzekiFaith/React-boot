import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Main = () => {
  const style = {
    box: {
      marginTop: "2rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      paddingBottom: "1rem",
    },
    Image: {
      width: "300px",
    },
    Burger: {
      width: "100%",
    },
    Paragraph: {
      width: "18rem",
      textAlign: "center",
      fontFamily: "Poiret One",
      padding: "4px",
    },
    Button: {
      width: "100%",
    },
  };
  return (
    <Container style={style.box}>
      <div className="">
        <div style={style.Image}>
          <img
            style={style.Burger}
            src="../../../public/Images/br2.jpg"
            placeholder="blur"
            alt="Burger Photo"
          />
        </div>
        <p style={style.Paragraph}>
          This product is built on the foremost integral part of development.
          Making it the requires all demand in the market place.
        </p>
        <Button style={style.Button} variant="success">
          Add to Cart
        </Button>
      </div>
      <div className="">
        <div style={style.Image}>
          <img
            style={style.Burger}
            src="../../../public/Images/br2.jpg"
            placeholder="blur"
            alt="Burger Photo"
          />
        </div>
        <p style={style.Paragraph}>
          This product is built on the foremost integral part of development.
          Making it the requires all demand in the market place.
        </p>
        <Button style={style.Button} variant="success">
          Add to Cart
        </Button>
      </div>
      <div className="">
        <div style={style.Image}>
          <img
            style={style.Burger}
            src="../../../public/Images/br2.jpg"
            placeholder="blur"
            alt="Burger Photo"
          />
        </div>
        <p style={style.Paragraph}>
          This product is built on the foremost integral part of development.
          Making it the required of all demand in the market place.
        </p>
        <Button style={style.Button} variant="success">
          Add to Cart
        </Button>
      </div>
      <div className="">
        <div style={style.Image}>
          <img
            style={style.Burger}
            src="../../../public/Images/br2.jpg"
            placeholder="blur"
            alt="Burger Photo"
          />
        </div>
        <p style={style.Paragraph}>
          This product is built on the foremost integral part of development.
          Making it the requires all demand in the market place.
        </p>
        <Button style={style.Button} variant="success">
          Add to Cart
        </Button>
      </div>
    </Container>
  );
};

export default Main;
