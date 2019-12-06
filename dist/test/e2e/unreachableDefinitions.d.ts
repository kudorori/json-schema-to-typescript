export declare const input: {
    title: string;
    type: string;
    definitions: {
        a: {
            properties: {
                firstName: {
                    type: string;
                };
                lastName: {
                    id: string;
                    type: string;
                };
            };
        };
    };
    properties: {
        b: {
            properties: {
                likesDogs: {
                    type: string;
                };
            };
        };
        required: string[];
    };
};
export declare const options: {
    unreachableDefinitions: boolean;
};
