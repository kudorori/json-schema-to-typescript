export declare const input: {
    title: string;
    type: string;
    properties: {
        array: {
            type: string;
            properties: {
                withMinItems: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                    minItems: number;
                };
                withMaxItems: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                    maxItems: number;
                };
                withMinMaxItems: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
                withMaxItems0: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                    maxItems: number;
                };
                withMinItems0: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                    minItems: number;
                };
                withMinMaxItems0: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
            };
            additionalProperties: boolean;
        };
        untyped: {
            type: string;
            properties: {
                withMinItems: {
                    type: string;
                    description: string;
                    minItems: number;
                };
                withMaxItems: {
                    type: string;
                    description: string;
                    maxItems: number;
                };
                withMinMaxItems: {
                    type: string;
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
                withMaxItems0: {
                    type: string;
                    description: string;
                    maxItems: number;
                };
                withMinItems0: {
                    type: string;
                    description: string;
                    minItems: number;
                };
                withMinMaxItems0: {
                    type: string;
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
            };
            additionalProperties: boolean;
        };
        tuple: {
            type: string;
            properties: {
                withMinItemsLessThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    minItems: number;
                };
                withMinItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    minItems: number;
                };
                withMaxItemsLessThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    maxItems: number;
                };
                withMaxItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    maxItems: number;
                };
                withMinItemsLessThanItemLength_and_MaxItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
                withMinItemsLessThanItemLength_and_MaxItemsLessThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
                withMinItemsGreaterThanItemLength_and_MaxItemsGreaterThanItemLength: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
                withMaxItems0: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    maxItems: number;
                };
                withMinItems0: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    minItems: number;
                };
                withMinMaxItems0: {
                    type: string;
                    items: {
                        enum: number[];
                    }[];
                    description: string;
                    minItems: number;
                    maxItems: number;
                };
            };
            additionalProperties: boolean;
        };
    };
    additionalProperties: boolean;
};
