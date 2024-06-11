import Home from "../componants/home";
import { connect } from "react-redux";
import { Addtocart } from "../services/actions/action";

const mapstatetoprops = (state) => ({
  data: state.Carditem,
});
const mapDispatchtopros = (dispatch) => ({
  addToCartHandler: (data) => dispatch(Addtocart(data)),
});

export default connect(mapstatetoprops, mapDispatchtopros)(Home);
