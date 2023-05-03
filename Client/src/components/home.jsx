import AddNote from "./AddNote";
import SwipeDrawer from "./SwipeDrawer";
import NoteGrid from "./NoteTiles/NoteGrid";
const Home = () => {
  return (
    <div>
      <SwipeDrawer />
      <AddNote/>
      <NoteGrid/>
    </div>
  );
};

export default Home;
