export const folderStructure = {
    id: 1,
    name: 'atlan',
    isFolder: true,
    child: [{
        id: 2,
        name: 'public',
        isFolder: true,
        child: [{
            id: 3,
            name: 'index.html',
            isFolder: false,
            child: []
        },{
            id: 4,
            name: 'mockdata',
            isFolder: true,
            child: [{
                id: 5,
                name: 'dummyData.json',
                isFolder: false,
                child: []
            },{
                id: 6,
                name: 'mockData.js',
                isFolder: false,
                child: []
            }]
        }]
    }, {
        id: 7,
        name: 'src',
        isFolder: true,
        child: [{
            id: 8,
            name: 'app.js',
            isFolder: false,
            child: []
        }, {
            id: 9,
            name: 'app.scss',
            isFolder: false,
            child: []
        }, {
            id: 10,
            name: 'index.js',
            isFolder: false,
            child: []
        },{
            id: 11,
            name: 'components',
            isFolder: true,
            child: [{
                id: 12,
                name: 'header.js',
                isFolder: false,
                child: []
            }, {
                id: 13,
                name: 'footer.js',
                isFolder: false,
                child: []
            }, {
                id: 12,
                name: 'navbar.js',
                isFolder: false,
                child: []
            }]
        }]
    }, {
        id: 15,
        name: 'readme.md',
        isFolder: false,
        child: []
    }, {
        id: 16,
        name: 'logo',
        isFolder: false,
        child: []
    }]
}