import MemoBlock from '../MemoBlock/MemoBlock'
import './Board.css'


const Board = ({handleMemoClick , animating, memoBlocks}) => {
    return (
        <main className="board">
            {memoBlocks.map((memoBlock, i) => {
                return <MemoBlock key={`${i}_${memoBlock.emoji}`} animating={animating} handleMemoClick={handleMemoClick} memoBlock={memoBlock}/>
            })}
        </main>
    )
}

export default Board