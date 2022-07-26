
function SmallPart(probs) {
    return (
        <div className="card" key={probs.key}>
            <h2 className="work">{probs.des}</h2>
            <h3 className="desc">{probs.name}</h3>
        </div>
    );
}

export default SmallPart;