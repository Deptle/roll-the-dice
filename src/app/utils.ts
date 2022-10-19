export const selectPlayer = (player: any) => {
  switch(player.id) {
    case 1:
      // "Selecting" Player 1
      document.getElementById(`player1panel`)!.classList.add("bg-bgSelected");
      document.getElementById(`player1name`)!.style.fontWeight = "300";
      document.getElementById(`player1circle`)!.classList.remove("hidden");

      // Deselecting Player 2
      deselectPlayer(2);
      break;
    case 2:
      // "Selecting" Player 2
      document.getElementById(`player2panel`)!.classList.add("bg-bgSelected");
      document.getElementById(`player2name`)!.style.fontWeight = "300";
      document.getElementById(`player2circle`)!.classList.remove("hidden");

      // Deselecting Player 1
      deselectPlayer(1);
      break;
    default:
      console.error("Failed to select a player: Unexpected Player ID");
      break;
  }
};

export const deselectPlayer = (playerID: number) => {
  switch(playerID) {
    case 1:
      // Deselecting Player 1
      document.getElementById(`player1panel`)!.classList.remove("bg-bgSelected");
      document.getElementById(`player1name`)!.style.fontWeight = "100";
      document.getElementById(`player1circle`)!.classList.add("hidden");
      break;
    case 2:
      // Deselecting Player 2
      document.getElementById(`player2panel`)!.classList.remove("bg-bgSelected");
      document.getElementById(`player2name`)!.style.fontWeight = "100";
      document.getElementById(`player2circle`)!.classList.add("hidden");
      break;
    default:
      console.error("Failed to deselect a player: Unexpected Player ID");
      break;
  }
}
