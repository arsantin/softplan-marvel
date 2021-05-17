import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHeroes } from "../../store/actions/heroActions";
import Search from "../Search";

function Home(props) {
  useEffect(() => {
    props.fetchHeroes(props);
  }, []);

  return (
    <>
      <h2
        style={{
          color: "orange",
          fontSize: "50px",
          width: "100%",
          textAlign: "center",
          margin: "20px 0px 40px 0px",
        }}
      >
        MARVEL
      </h2>

      {props ? <Search items={props.heroes} /> : <div></div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  heroes: state.heroes.items,
});

export default connect(mapStateToProps, { fetchHeroes })(Home);
