
function TabContent(props) {
    const {content,isActive} = props;
    return (
        <div className={"tab" + (isActive ? "active" : "")}>
            {content}
        </div>
    );
}

export default TabContent;