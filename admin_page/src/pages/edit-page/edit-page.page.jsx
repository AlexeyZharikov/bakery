import EditProduct from "../../components/Products/putProduct/putProduct.component";
import './edit-page.page.scss' ;

const EditPage = (props) => {

  return(
    <div className="edit">
      <div className="container">
        <h2>Редактировать продукт</h2>
        <EditProduct/>
      </div>
    </div>
  ) 
}

export default EditPage;