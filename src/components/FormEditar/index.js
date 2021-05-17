import { useParams } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeName } from "../../store/actions/heroActions";

const FormEditar = (props) => {
  let { name } = useParams();
  let { id } = useParams();
  const [novoNome, setnovoNome] = useState({ name });

  const handleChange = (event) => {
    setnovoNome(event.target.value);
  };
  const { changeName } = props;
  return (
    <>
      <h1>Mude o nome do seu personagem</h1>
      <form onSubmit={changeName}>
        <input id="id" type="hidden" value={id} />
        <input
          id="name"
          type="text"
          placeholder={novoNome.name}
          onChange={handleChange}
        />
        <button type="submit">SALVAR</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  heroes: state.heroes.items,
});

const mapDispatchToProps = (dispatch) => {
  bindActionCreators({ changeName }, dispatch);
};

export default connect(mapDispatchToProps, { changeName })(FormEditar);
