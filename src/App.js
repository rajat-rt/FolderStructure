import './App.css';
import Folder from './components/Folder';
import { folderStructure } from '../src/data/mockData.js'
import useCreateNode from './hooks/createNode';

function App() {
  const { createNode } = useCreateNode();

  const createInputHandler = (folderId, name, isFolder) => {
    createNode(folderStructure, folderId, name, isFolder);
  };

  return (
    <div className="App">
      <Folder folderData={folderStructure} createInputHandler={createInputHandler}/>
    </div>
  );
}

export default App;
