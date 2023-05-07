function TabTitle({titles,toggleActive}) {
    return (
        <button onClick={toggleActive}>{titles}</button>
    );
}

export default TabTitle;