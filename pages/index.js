import styles from '../styles/Board.module.css';

export default function Home() {
  const boardSize = 8;
  const board = [];

  for (let row = 0; row < boardSize; row++) {
    const rowSquares = [];
    for (let col = 0; col < boardSize; col++) {
      const isBlack = (row + col) % 2 === 1;
      let piece = null;

      if (row < 3 && isBlack) {
        piece = <div className={styles.piece} style={{ backgroundColor: '#FF69B4' }}></div>; // 
      } else if (row > 4 && isBlack) {
        piece = <div className={styles.piece} style={{ backgroundColor: '#00BFFF' }}></div>; // 
      }

      rowSquares.push(
        <div
          key={`${row}-${col}`}
          className={`${styles.square} ${isBlack ? styles.black : styles.white}`}
        >
          {piece}
        </div>
      );
    }
    board.push(<div key={row} className={styles.row}>{rowSquares}</div>);
  }

  return (
    <div className={styles.container}>
      <h1>Trabalho Tabuleiro Dama</h1>
      <div className={styles.board}>{board}</div>
    </div>
  );

  
}
