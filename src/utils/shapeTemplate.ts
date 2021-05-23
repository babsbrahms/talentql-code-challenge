
type Shape = Array<{ 
        name: string, 
        hasHeight: boolean, 
        borderWidth: number, 
        style: (color: string, h1: number,  h2: number ) => any
    }>

const shapes : Shape= [ 
    {
        name: 'round',
        style: (color, h1, h2) => ({ width: h1, height: h1, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color, borderRadius: (h1/2) }),
        hasHeight: false,
        borderWidth: 1
    },

    {
        name: 'oval',
        style: (color, h1, h2) => ({ width: (h1*2), height: (h1), borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color, borderRadius: (h1/2)  }),
        hasHeight: false,
        borderWidth: 2
    },
    {
        name: 'square',
        style: (color, h1, h2) => ({ width: h1, height: h1, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color}),
        hasHeight: false,
        borderWidth: 1
    },
    {
        name: 'rectangle',
        style: (color, h1, h2) => ({ width: h1, height: h2, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color}),
        hasHeight: true,
        borderWidth: 1
    },
    {
        name: 'triangle',
        style: (color, h1, h2) => ({ width: 0, height: 0, borderLeftWidth: h1,  borderLeftColor: 'transparent', borderRightWidth: h1, borderRightColor: 'transparent', borderBottomWidth: (h1*2), borderBottomColor: color, borderStyle: 'solid'}),
        hasHeight: false,
        borderWidth: 2
    }
];


export const findShapesByName = (name: string) => {
    const style = shapes.find(x => x.name === name)
    return style
}

export default shapes;

// {
//     name: 'oval',
//     style: (color, h1, h2) => ({ width: (h1*2), height: (h1), borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color, borderRadius: (h1/2)  }),
//     hasHeight: false,
//     borderWidth: 2
// },
// {
//     name: 'ovalOutline',
//     style: (color, h1, h2) => ({ width: (h1*2), height: (h1), borderStyle: 'solid', borderWidth: 3, borderColor: color, borderRadius: (h1/2)  }),
//     hasHeight: false,
//     borderWidth: 2
// },
// {
//     name: 'ellipse',
//     style: (color, h1, h2) => ({ width: (h1/2), height: (h1), borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color, borderRadius: (h1/2)  }),
//     hasHeight: false,
//     borderWidth: 0.5
// },
// {
//     name: 'ellipseOutline',
//     style: (color, h1, h2) => ({ width: (h1/2), height: (h1), borderStyle: 'solid', borderWidth: 3, borderColor: color, borderRadius: (h1/2)  }),
//     hasHeight: false,
//     borderWidth: 0.5
// },
// {
//     name: 'square',
//     style: (color, h1, h2) => ({ width: h1, height: h1, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color}),
//     hasHeight: false,
//     borderWidth: 1
// },
// {
//     name: 'squareOutline',
//     style: (color, h1, h2) => ({ width: h1, height: h1, borderStyle: 'solid', borderWidth: 3, borderColor: color }),
//     hasHeight: false,
//     borderWidth: 1
// },
// {
//     name: 'rectangle',
//     style: (color, h1, h2) => ({ width: h1, height: h2, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color}),
//     hasHeight: true,
//     borderWidth: 1
// },
// {
//     name: 'rectangleOutline',
//     style: (color, h1, h2) => ({ width: h1, height: h2, borderStyle: 'solid', borderWidth: 3, borderColor: color }),
//     hasHeight: true,
//     borderWidth: 1
// },
// {
//     name: 'roundEndrectangle',
//     style: (color, h1, h2) => ({ width: h1, height: h2, borderStyle: 'solid', borderWidth: 1, borderColor: color, backgroundColor: color, borderRadius: 15}),
//     hasHeight: true,
//     borderWidth: 1
// },
// {
//     name: 'roundEndrectangleOutline',
//     style: (color, h1, h2) => ({ width: h1, height: h2, borderStyle: 'solid', borderWidth: 3, borderColor: color, borderRadius: 15}),
//     hasHeight: true,
//     borderWidth: 1
// },
// {
//     name: 'triangleUp',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderLeftWidth: h1,  borderLeftColor: 'transparent', borderRightWidth: h1, borderRightColor: 'transparent', borderBottomWidth: (h1*2), borderBottomColor: color, borderStyle: 'solid'}),
//     hasHeight: false,
//     borderWidth: 2
// }, 
// {
//     name: 'triangleDown',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderLeftWidth: h1,  borderLeftColor: 'transparent', borderRightWidth: h1, borderRightColor: 'transparent', borderTopWidth: (h1*2), borderTopColor: color, borderStyle: 'solid'}),
//     hasHeight: false,
//     borderWidth: 2
// },
// {
//     name: 'triangleLeft',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderTopWidth: h1,  borderTopColor: 'transparent', borderBottomWidth: h1, borderBottomColor: 'transparent', borderRightWidth: (h1*2), borderRightColor: color, borderStyle: 'solid'}),
//     hasHeight: false,
//     borderWidth: 2
// },
// {
//     name: 'triangleRight',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderTopWidth: h1,  borderTopColor: 'transparent', borderBottomWidth: h1, borderBottomColor: 'transparent', borderLeftWidth: (h1*2), borderLeftColor: color, borderStyle: 'solid'}),
//     hasHeight: false,
//     borderWidth: 2
// },
// {
//     name: 'triangleTopRight',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderTopWidth: h1, borderTopColor: color, borderLeftWidth: h1, borderLeftColor: 'transparent', borderStyle: 'solid' }),
//     hasHeight: false,
//     borderWidth: 1
// },
// {
//     name: 'triangleTopLeft',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderTopWidth: h1, borderTopColor: color, borderRightWidth: h1, borderRightColor: 'transparent', borderStyle: 'solid' }),
//     hasHeight: false,
//     borderWidth: 1
// },
// {
//     name: 'triangleBottmRight',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderBottomWidth: h1, borderBottomColor: color, borderLeftWidth: h1, borderLeftColor: 'transparent', borderStyle: 'solid' }),
//     hasHeight: false,
//     borderWidth: 1
// },
// {
//     name: 'triangleBottomLeft',
//     style: (color, h1, h2) => ({ width: 0, height: 0, borderBottomWidth: h1, borderBottomColor: color, borderRightWidth: h1, borderRightColor: 'transparent', borderStyle: 'solid' }),
//     hasHeight: false,
//     borderWidth: 1
// },