import {Link} from "react-router-dom";

export default ({title, description, id}) => {
    return (<div>
        <Link to={`/play/${id}/0`}>
            <button>{title}</button>
        </Link>
    </div>)
}