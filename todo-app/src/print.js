
import SmallPart from "./part"
function Print(probs) {
    let itemList = probs.todolist.map((item, index) => {

        return (
            <SmallPart name={item.name} des={item.des} key={index} />
        )
    })

    return (
        <div>
            {itemList}
        </div>
    );
}

export default Print;