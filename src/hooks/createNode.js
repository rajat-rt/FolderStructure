const useCreateNode = () => {
    function createNode (data, folderId, name, isFolder) {
        if(data.id === folderId) {
            data.child.unshift({
                id: new Date().getTime(),
                name,
                isFolder, 
                child: []
            })
            return data;
        };
        let newData = [];
        newData = data.child.map(obj => {
            return createNode(obj, folderId, name, isFolder);
        });

        return { ...data, child: newData };

    }
    return { createNode };
}

export default useCreateNode;