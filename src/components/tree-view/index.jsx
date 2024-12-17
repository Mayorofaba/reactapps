import MenuList from "./menuList";
import "./styles.css"


export default function TreeView({ menu = [] }) {
    return (
        <div className="TreeView-container">
            <MenuList list={menu} />
        </div>
    );
}
