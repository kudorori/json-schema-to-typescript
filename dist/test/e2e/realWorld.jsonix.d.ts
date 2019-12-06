export declare let input: {
    "id": string;
    "definitions": {
        "VerifyAllLogs": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "check": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyBackupDidNotReseed": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "InstallHyperVHost": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "installType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "management": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "port": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "installdir": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "log": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyLogForString": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "findThisString": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "shouldBeThere": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "useRegEx": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyVaultLogsForErrors": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "fileName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "allMatchingFiles": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "matchOption": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "patternString": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckElapsedTime": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "thresholdHHMMSS": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "operator": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Fail": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "Backup": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "optionsFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "options": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "wait": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retentionID": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CountXLOGs": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "countBackupLogs": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedBackupLogs": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "countRestoreLogs": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedRestoreLogs": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "checkIfFailedBackupLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "checkIfSyncLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Exchange2010Cmdlet": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "onMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dbName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "serverName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "toServerName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "cmdlet": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedDBStatus": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedDBIndexState": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ManageAgentRetentions": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "action": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retentionName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "onlineDays": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "onlineCopies": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "archiveDays": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "JobProcessing": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "compressionLevel": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "nameEncoding": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "destination": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "retentionId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "deltaBlockSize": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "deferAfter": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "deltaProcessing": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "quickFileScan": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "backupOpenFiles": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "createLocalCatalog": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "disablePrescan": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VM": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "hostLogon": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "extra": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "host": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "_interface": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "id": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "datacenter": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "snapshot": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "hostIP": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "moveToHostIP": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "template": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "datastore": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "moveToDatastore": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "version": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "networkName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "networkId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "resourcePool": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "folder": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "ovaLocation": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "rpmLocation": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "shareUser": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "sharePassword": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vmdkName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vmdkPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vmdkNameWithEscape": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "specialChars": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vraBuildNo": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "rpmBuildNo": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "encoding": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "diskStorageFormat": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "JobConfigLocal": {
            "type": string;
            "title": string;
            "properties": {
                "jobGuid": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vaultGuid": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vaultComputerId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "buildVersion": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Suite": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "setup": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "suiteVariable": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "test": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "teardown": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "allTestsCritical": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "expectAllFail": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "runPassedTCs": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "hasDependentTCs": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "logCleanup": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ClearEventLogs": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SSHRemoteSystemCommand": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "userName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckVar": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedValue": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CreateBatchOnWinMachine": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "batchLines": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyExchangeDBReseed": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "database": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "shouldReseed": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "MoveExchangeDatabases": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dbName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "newEDBLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "newLogsLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "PSMemberInfo": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "isInstance": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "value": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "AddPasswordToJob": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "job": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "encryptionType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ScheduleEntry": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "operation": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "identifier": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "legacy": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "cycle": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "options": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "enabled": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfCommandWithPrompt": {
            "type": string;
            "title": string;
            "properties": {
                "commandWithPrompt": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyLog": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "logName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "check": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "checkLatestLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SuiteVariable": {
            "type": string;
            "title": string;
            "properties": {
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "value": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CopyVaultLogs": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ProcessedLog": {
            "type": string;
            "title": string;
            "properties": {
                "filename": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "logResult": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SleepCondition": {
            "type": string;
            "title": string;
            "properties": {
                "seconds": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "minutes": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "teamName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "StartRecordingNetworkUsage": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "counterName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DownloadJobFromAnotherComputer": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "sourceAgent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "destinationAgent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "StringVariable": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "JobLogSettings": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "createLog": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "level": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "format": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "purgeExpiredOnly": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "maxLogCopies": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfInt": {
            "type": string;
            "title": string;
            "properties": {
                "_int": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "GenFiles": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "percentages": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "path": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "totalSizeInKb": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "compressible": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckTraceFile": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "message": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "nextMessage": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "traceLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "frequency": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "wholeFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "PrepareForExchangeVSSRestore": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dbName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CompareHashLogs": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "log1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "log2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logFolder": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "hashlogFolder": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CalculateFileHash": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "method": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "saveHashTo": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "saveVersionTo": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "path": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CopyFiles": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "source": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "destination": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "files": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryLimit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryTimeout": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfParameter": {
            "type": string;
            "title": string;
            "properties": {
                "parameter": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyLogHasSmallExchangeDelta": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "TeamConnectivity": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "ArrayOfSuite": {
            "type": string;
            "title": string;
            "properties": {
                "suite": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckVMDiskProvisionType": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "provisionType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "hardDriveNo": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vSphereServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DeleteFiles": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "files": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryLimit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryTimeout": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "deleteSubFolders": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VariableList": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        "MachineOp": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "action": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "cleanup": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "extraDeployOptions": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "diskStorageFormat": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "datastore": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "template": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vApp": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "hasRestoredSuffix": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "snapshotName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "snapshotDescription": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RegisterAgent": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "existingComputer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DeleteEmails": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "exMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "forUserName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "searchQuery": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "mailboxSizeAfterDeletion": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "EWSDelete": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "onMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "deleteType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rootFolder": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "folderNameToDelete": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "parentFolderName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "user": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "itemSubject": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "emptySubfolders": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "deleteSubfolders": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfString": {
            "type": string;
            "title": string;
            "properties": {
                "string": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "FileExists": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "files": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logic": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ComparePSAttributeToString": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "powershellCommand": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "comparisonString": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vSphereServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "username": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "targetVM": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vMname": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Mount": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "optionsFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "options": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "safeSetID": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "testVM": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "shareUser": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sharePassword": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "mountTimeout": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "wait": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "diskNumber": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "diskPathAndName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CloneFiles": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "location": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "files": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CountSafesetsOnAgent": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedNumberOfSafesets": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RunSQLQuery": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "sqlServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "user": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "queryFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "AgentInfo": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "serviceName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "mode": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ExpectedLogMatches": {
            "type": string;
            "title": string;
            "properties": {
                "logMatch": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "JobConfig": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "description": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "type": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "jobId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "nativeJob": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "computerName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vaultComputerId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "originalVault": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "commonFilters": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "allCommonFilters": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "sources": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "processing": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "encryption": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "log": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "tape": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "scheduleLoaded": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "schedule": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "signature": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "local": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "mSignature": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "mScheduleSignature": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfSleepCondition": {
            "type": string;
            "title": string;
            "properties": {
                "sleepCondition": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "LogMatch": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "resultType": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "pattern": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "patternType": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "lineText": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "count": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "MakeScriptRunnable": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "TeamMachineOp": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "action": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "initializationCheckCommand": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "initializationCheckArguments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "initializationCheckExitCode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "initializationCheckMaxRetries": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "initializationCheckRetrySleepSeconds": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "FindInFile": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "searchStrings": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "isCaseSensitive": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePathAndName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logic": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckFileForString": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "psGetSearchText": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "resolvedPath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "file": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "searchText": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "shouldExist": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CopyLogs": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logMask": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "traceMask": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "deleteOldLogs": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "activeNode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "subDir": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "TimeLimit": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "timeout": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "retries": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "sleep": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DateFilter": {
            "type": string;
            "title": string;
            "properties": {
                "from": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "to": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "type": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "FilePair": {
            "type": string;
            "title": string;
            "properties": {
                "source": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "destination": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfSourceOverride": {
            "type": string;
            "title": string;
            "properties": {
                "sourceOverride": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RemoteSystemCommand": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "runAsSystemAccount": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "conditionalArguments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfPSMemberInfo": {
            "type": string;
            "title": string;
            "properties": {
                "psMemberInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CommandWithPrompt": {
            "type": string;
            "title": string;
            "properties": {
                "prompt": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "command": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SyncSatelliteVault": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfPSMethodInfo": {
            "type": string;
            "title": string;
            "properties": {
                "psMethodInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfFilePair": {
            "type": string;
            "title": string;
            "properties": {
                "filePair": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Pause": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "Team.Machines": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        "ChangeDate": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "goBackwardForward": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "days": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "customDate": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Hasher": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "logName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "unixArguments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfRestoreOptions": {
            "type": string;
            "title": string;
            "properties": {
                "restoreOptions": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Volume": {
            "type": string;
            "title": string;
            "properties": {
                "driveLetter": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyState": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "action": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "saveLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyAllLogsForErrors": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "restorePassCount": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "WaitForVMSnapshots": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "displayName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vSphereServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "username": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "lessThan": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "timeOut": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SQLDataCompare": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "iHaveAConfigFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sqlServer1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "user1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "db1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sqlServer2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "user2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "db2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "configFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "displayLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Variable": {
            "type": string;
            "title": string;
            "properties": {
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "value": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyExchangeVSSHardRecovery": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dbName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedResultCount": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckMailboxSize": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "onMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "userName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedSize": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RemoveTemplate": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "fromMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "server": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "userName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "container": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "cleanup": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RunVaultOperation": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vaultOp": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "InstallHyperVManagement": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "installType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "uiregport": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "installdir": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "log": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Queue": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "commands": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "override": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfPSObject": {
            "type": string;
            "title": string;
            "properties": {
                "psObject": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Machine.Credentials": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        "Credential": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "extra": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "consumer": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "username": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "password": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "domain": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "profile": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "UnsignedIntegerVariable": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "ArrayOfMessage": {
            "type": string;
            "title": string;
            "properties": {
                "message": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "MachineReboot": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachineAfterReboot": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "setupCommand": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "setupArguments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "setupWaitForExit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "setupExitCode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "setupRetries": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "setupRetrySleep": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "runSetupCommand": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "teardownCommand": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "teardownArguments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "teardownWaitForExit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "teardownExitCode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "teardownRetries": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "teardownRetrySleep": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "runTeardownCommand": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rebootCommand": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rebootArguments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rebootWaitForExit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rebootExitCode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rebootRetries": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rebootRetrySleep": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "offlineRetries": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "offlineRetrySleep": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "onlineRetries": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "onlineRetrySleep": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "waitOffline": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "waitOnline": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "UnregAgentJob": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Pair": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "field": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "localizeField": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "value": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "localizeValue": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ReplaceRestoreTargetInVPR": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vprFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "targetVM": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dataStoreName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "diskNumbers": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ObjectSpec": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "displayName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "localize": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "type": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "alternates": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ScheduleCycle": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "type": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "hour": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "minute": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "daysOfWeek": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "daysOfMonth": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "lastDayOfMonth": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "custom": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyLogForErrors": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "restorePassCount": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "ignoreValidation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "ignoreConnectionErrors": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "ignoreNestedMessages": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ScrapeLog": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "files": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "matches": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sourcePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "source": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "job": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedMatches": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ReplaceDatastoreUuidInVPR": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vprFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "targetVM": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dataStoreName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "UnixPathManipulator": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "RevertToSnapshot": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vmName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vSphereServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "snapshotName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VariableOfUInt32": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "CommandList": {
            "type": string;
            "title": string;
            "properties": {
                "agentControlOrAssignOrBackup": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "anyOf": {
                                "anyOf": {
                                    "$ref": string;
                                }[];
                                "elementName": {
                                    "localPart": string;
                                    "namespaceURI": string;
                                };
                            }[];
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckVaultProfile": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckIsProcessRunning": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "processId": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedRunning": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "MachineConnectivity": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "RunQueue": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "MasterConfig": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "testPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "utilityPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "logPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "logLevel": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "displayLevel": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "machineDetails": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "machinePath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "teamDetails": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "teamPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "suiteDetails": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "suitePath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "providerPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "testPlan": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "testPlanPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "PSObject": {
            "type": string;
            "title": string;
            "properties": {
                "members": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "properties": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "methods": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "typeNames": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SuiteTest": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "isCritical": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ExchangeDatabase": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "storageGroupName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "databaseName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "publicFolder": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "guid": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfPSPropertyInfo": {
            "type": string;
            "title": string;
            "properties": {
                "psPropertyInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "IntegerVariable": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "VariableOfInt32": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "BooleanVariable": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "ChangeFile": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "pattern": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "deltaSize": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "firstBlock": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "numBlocks": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "newSize": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Macro": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "filePathAndName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "PowerShell": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "script": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedResultSize": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "isBoolean": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "displayResults": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "JobEncryption": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "method": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "password": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "passwordChanged": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Parameter": {
            "type": string;
            "title": string;
            "properties": {
                "value": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Sleep": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "conditions": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "seconds": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "minutes": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "OutVar": {
            "type": string;
            "title": string;
            "properties": {
                "readFrom": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "assignTo": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfExchangeDatabase": {
            "type": string;
            "title": string;
            "properties": {
                "exchangeDatabase": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ReplaceVMuuidInVPR": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vMsToBeRestored": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vprFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VariableOfBoolean": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "JobTapeSettings": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "operatorAssisted": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "ignoreLabel": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "initializeTape": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "unloadAfterCompletion": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "useEOD": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "useNewTape": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "tapeLabel": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ModifyJobOnAgent": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "configFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "job": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sources": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ObjectSelector": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "startLocation": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "displayLocation": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "separator": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "containerSpecs": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "specs": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "returnType": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "recursive": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "dateFilters": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DeleteDeltaFiles": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "safesets": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryLimit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryTimeout": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DeleteVaultRegistration": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "StopActiveProcesses": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "terminate": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Restore": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "optionsFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "options": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "wait": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retentionID": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "forceEncryption": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfMachine": {
            "type": string;
            "title": string;
            "properties": {
                "machine": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfTeam": {
            "type": string;
            "title": string;
            "properties": {
                "team": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "FindReplaceVMUuid": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "optionsFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "configFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckEventLogs": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CustomObject": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "xmlObject": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "binaryObject": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "objectId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "binaryFormat": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Machine.Locations": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        "DeployVRA": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vraMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "datastoreName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "hostMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "hostAddress": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "ovaLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "buildNumber": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rpmBuildNumber": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "rpmLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "forceUpgrade": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "serverMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "serverAddress": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "serverUserName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "serverPassword": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "resourcePool": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "shareUser": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sharePassword": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "handleOldVRA": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vmNetwork": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "timezone": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "defaultUserName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "defaultPassword": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "thickStorage": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "BackupOptions": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "sources": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "processing": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "disablePrescan": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CreateExchangeDB": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "optionsFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dbName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "edbLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logsLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckVMCBTEnabled": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vSphereServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RecordCustomFieldValue": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "customFieldName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RestoreOptions": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "safesetId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "source": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "destination": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "dataSources": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "disablePrescan": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "logSettings": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "password": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "existingFileAction": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RegisterJob": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "configFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "job": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sources": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "useRandomEncryptionType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "PSLocalScript": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "winCmdlets": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Assign": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "name": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "value": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CreateDir": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dirName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VaultInfo": {
            "type": string;
            "title": string;
            "properties": {
                "account": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "logon": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "version": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SetJobVVCProperty": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agentMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vvcPath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "property": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "valueType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "value": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "UpdateXmlValues": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CreateScriptFile": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "scriptLines": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "extension": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "exitCode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "run": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "runAsSystemAccount": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "waitForExit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "run32": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "encode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SetVCenterCredentials": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "username": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyRestoreToOriginalLocation": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "SQLSchemaCompare": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "iHaveAConfigFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sqlServer1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "user1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "db1": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sqlServer2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "user2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "db2": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "configFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "displayLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Succeed": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "Sync": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "wait": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "UnixDosConversion": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "conversionType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "useSed": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckDumps": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dumpMask": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SendEmail": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "fromMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fromEmail": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "toEmail": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "subject": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "body": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "attachments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "smtpServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CompareFile": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "files": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "old": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "_new": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "_switch": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "PathManipulator": {
            "type": string;
            "title": string;
            "properties": {};
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "Map": {
            "type": string;
            "title": string;
            "properties": {
                "team": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "suite": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SourceOverride": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "topLevelContainer": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "include": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "exclude": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "parameters": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "credentials": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "source": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifySyncLogForErrors": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "ignoreValidation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "ignoreConnectionErrors": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ReplaceVMuuidInVVC": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "wildCardInclusions": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "individualVMInclusions": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "wildCardExclusions": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "individualVMExclusions": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vvcFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "wildCardsAndIndividualInclExclEnabled": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "AgentControl": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "action": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ParseFileUsingRegularExpression": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "parseMethodLineByLine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePathAndName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "patternString": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "matchOption": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedMatchCount": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "allMatchingFiles": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VariableOfString": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "Credentials": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "method": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "consumer": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "username": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "password": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "passwordChanged": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "domain": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "profile": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Machine.Extra": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        "BMRestore": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "sourceAgent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "encryptionPassword": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "volumeMapping": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "snapshotID": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "restoreJobLogDir": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Team": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "machines": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "tLinkPlatformID": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "x64": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "osType": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "providerId": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "JobSource": {
            "type": string;
            "title": string;
            "properties": {
                "dataSource": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "topLevelContainer": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "include": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "exclude": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "parameters": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "credentials": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "PSScriptEx2010Cmdlets": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "exCmdlets": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "onMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfMap": {
            "type": string;
            "title": string;
            "properties": {
                "map": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ArrayOfVolume": {
            "type": string;
            "title": string;
            "properties": {
                "volume": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VM.Extra": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        "ThrottleAgent": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "days": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "enabled": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "bandwidth": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "startTime": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "endTime": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "VerifyLogHasZeroDeltizedBytes": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "GenerateFile": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "path": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileSizeInKb": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "compressible": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "UnregisterJob": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "job": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DeleteSafeset": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "safesetId": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "DebugNext": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        "VerifyLogForMessages": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "messages": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "IsAgentRegisteredToVault": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "shouldFail": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SystemCommand": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "programRunnerTimeLimit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "command": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "arguments": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "waitForExit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "exitCode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "onIteration": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CountSafesetsOnVault": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vaultComputerName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedNumberOfSafesets": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ReplaceRegistrationHostUuidInVPR": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vprFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "targetVM": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Test": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "setup": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "commands": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "teardown": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "variables": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "owner": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "tLinkTID": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "tLinkPID": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "dontSendResult": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "dontSkip": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "abortSuiteOnFail": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CreateExchangeMailbox": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dbName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "baseUserName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "password": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "atDomain": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "nbMailboxes": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckDeferralResume": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "sql": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "CheckCompressedBytesRatio": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "ratio": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RecordLogExecutionTime": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "logName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "checkLatestLog": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "outputFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "lineFormatting": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "UnregisterAgent": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryCycles": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "retryLength": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "StopRecordingAndCheckNetworkUsage": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "counterName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "max": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "min": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "SetGlobalVVCProperty": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agentMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vvcPath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "property": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "valueType": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "value": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "WinPathManipulator": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        ReplaceVMuuidInJson: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vmNames": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jsonFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jsonFilePurpose": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ChangeTime": {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "targetMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "action": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "newTime12HFormat": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "newTimeZone": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dst": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "internetSynch": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "RunCommand": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "path": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "commandName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "commandArgs": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "waitForExit": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "exitCode": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "isRemote": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "iteration": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "ControlExchangeDatabase": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "database": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "server": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "location": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "action": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "HashLogger": {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "type": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "uncUser": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "uncPassword": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        Loop: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "commands": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "times": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        PSPropertyInfo: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {};
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        DeleteVSSSnapshots: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        InstallAgent: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "installScript": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "setupProgram": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "targetOS": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "installLanguage": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        ArrayOfPair: {
            "type": string;
            "title": string;
            "properties": {
                "pair": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        Plan: {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "steps": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "sendResultsToTlink": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "sendFailuresToOwner": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        GetFileVersion: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "isInstallKit": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        RecordCommandsExecutionTime: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "commands": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "outputFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "lineFormatting": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        PSMethodInfo: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "overloadDefinitions": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        Echo: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "message": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        ExecuteSSHCommandSet: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "commands": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "welcomePrompt": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        Message: {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "parameters": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "id": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "severity": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "count": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        RegisterEnvironment: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "currentName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "newName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "envUsername": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "envPassword": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "portalMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        CreateExchangeRecoveryDB: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "optionsFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dbName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "edbLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logsLocation": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        ReadFiles: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "ranges": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "agentMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "path": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "logFolder": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filesLogFolder": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filesLogFile": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "flag": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dynamic": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "totalSizeInKb": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "comment": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        RecordResultToTestlink: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "testCaseID": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "testCaseResult": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        BaseCommand: {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "delay": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "outVar": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "delayXmlAttribute": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "description": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "isCritical": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "continueIfFailed": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "retries": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "retrySleep": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        ScheduleOptions: {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "deferAfter": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "deltaProcessing": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "quickFileScan": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "retention": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "compressionLevel": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "backupType": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "deleteDataSourceLogs": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "customInfo": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        Machine: {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "type": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "initializationPriority": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "volumes": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "exchangeServerVersion": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "exchangeServerName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "exchangeDatabases": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "operatingSystem": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "subnet": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "address": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "mac": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "physicalAddress": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "fileSystem": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "driveLetter": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "raMinMB": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "locations": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "agentDetails": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vaultDetails": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "logon": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "credentials": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "vmSettings": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "portalCredentials": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "extra": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "name": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "agentName": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        PSRemoteScript: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "winCmdlets": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "results": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "elementName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "x86": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        CompareFileVersion: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileVersionString": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileVersionMajor": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileVersionMinor": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileVersionBuild": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "fileVersionPrivate": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        ScraperConfig: {
            "type": string;
            "title": string;
            "properties": {
                "masterConfigPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "workingPath": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "files": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "expectedMatches": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Credential.Extra": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        ArrayOfOperatingSystems: {
            "type": string;
            "title": string;
            "properties": {
                "operatingSystems": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        ArrayOfBackupOptions: {
            "type": string;
            "title": string;
            "properties": {
                "backupOptions": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "items": {
                            "$ref": string;
                        };
                        "minItems": number;
                    }[];
                    "propertyType": string;
                    "elementName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        CheckWindowsServices: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "target": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "serviceName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "state": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "shouldExist": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        SetVaultStatus: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "vault": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "replMode": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "customer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        WaitForProcessCompletion: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "agent": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "jobName": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "timeOut": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        MachinePath: {
            "type": string;
            "title": string;
            "properties": {
                "machine": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
                "path": {
                    "title": string;
                    "allOf": {
                        "$ref": string;
                    }[];
                    "propertyType": string;
                    "attributeName": {
                        "localPart": string;
                        "namespaceURI": string;
                    };
                };
            };
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        "Test.Variables": {
            "type": string;
            "title": string;
            "required": string[];
            "properties": {
                "any": {
                    "title": string;
                    "allOf": {
                        "type": string;
                        "properties": {
                            "name": {
                                "$ref": string;
                            };
                            "value": {};
                        };
                    }[];
                    "propertyType": string;
                };
            };
            "typeType": string;
            "propertiesOrder": string[];
        };
        GetDate: {
            "required": string[];
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "machine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "whichDate": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "filePath": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "format": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "dstOffsetEnable": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        CheckVMProperty: {
            "allOf": ({
                "$ref": string;
                type?: undefined;
                title?: undefined;
                properties?: undefined;
            } | {
                "type": string;
                "title": string;
                "properties": {
                    "remoteMachine": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "vSphereServer": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "property": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "expectedValue": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "diskNo": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                    "hasRestoredSuffix": {
                        "title": string;
                        "allOf": {
                            "$ref": string;
                        }[];
                        "propertyType": string;
                        "attributeName": {
                            "localPart": string;
                            "namespaceURI": string;
                        };
                    };
                };
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
            "propertiesOrder": string[];
        };
        InterfaceType: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        Actions: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        CmdletType: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        VaultOperation: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        ActionType: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        DBContentIndexState: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        OperatingSystems: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        DBCopyStatus: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        HashLoggerTypes: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        Severity: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        DataSourceType: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        RootFolderType: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        ConversionTypes: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        MachineTypes: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        ExchangeServerVersions: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        VerifyStateActions: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        CredentialConsumer: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        EWSDeleteType: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        LanguageCode: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        PatternTypes: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        Modes: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        DateType: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        VRADeploymentOldMachineHandling: {
            "allOf": ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            "typeType": string;
            "typeName": {
                "localPart": string;
                "namespaceURI": string;
            };
        };
        TeamActionType: {
            allOf: ({
                "$ref": string;
                enum?: undefined;
            } | {
                "enum": string[];
                $ref?: undefined;
            })[];
            typeType: string;
            typeName: {
                localPart: string;
                namespaceURI: string;
            };
        };
    };
    anyOf: {
        type: string;
        properties: {
            name: {
                "allOf": ({
                    "$ref": string;
                    type?: undefined;
                    properties?: undefined;
                } | {
                    "type": string;
                    "properties": {
                        "localPart": {
                            "enum": string[];
                        };
                        "namespaceURI": {
                            "enum": string[];
                        };
                    };
                    $ref?: undefined;
                })[];
            };
            value: {
                $ref: string;
            };
        };
        elementName: {
            localPart: string;
            namespaceURI: string;
        };
    }[];
};
