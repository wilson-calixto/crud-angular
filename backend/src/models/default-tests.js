var tests = [
    {
        "name": "Edid Test",
        "activated": false,
        "sequence": 0,
        "parameters":
        [
            {
                "name": "File status",
                "value": "No file",
                "type": 1
            },
            {
                "name": "sampling",
                "value": 1,
                "type": 2
            },
            {
                "name": "header",
                "value": true,
                "type": 4
            },
            {
                "name": "id manufacturer name",
                "value": true,
                "type": 4
            },
            {
                "name": "id product code",
                "value": true,
                "type": 4
            },
            {
                "name": "id serial number",
                "value": false,
                "type": 4
            },
            {
                "name": "week of manufacture",
                "value": false,
                "type": 4
            },
            {
                "name": "year of manufacture",
                "value": false,
                "type": 4
            },
            {
                "name": "edid structure version",
                "value": true,
                "type": 4
            },
            {
                "name": "edid structure revision",
                "value": true,
                "type": 4
            },
            {
                "name": "video input definition",
                "value": true,
                "type": 4
            },
            {
                "name": "max. horizontal image size",
                "value": true,
                "type": 4
            },
            {
                "name": "max. vertical image size",
                "value": true,
                "type": 4
            },
            {
                "name": "display transfer characteristic (gamma)",
                "value": true,
                "type": 4
            },
            {
                "name": "feature support",
                "value": true,
                "type": 4
            },
            {
                "name": "red/green low bits",
                "value": true,
                "type": 4
            },
            {
                "name": "blue/white low bits",
                "value": true,
                "type": 4
            },
            {
                "name": "red x",
                "value": true,
                "type": 4
            },
            {
                "name": "red y",
                "value": true,
                "type": 4
            },
            {
                "name": "green x",
                "value": true,
                "type": 4
            },
            {
                "name": "green y",
                "value": true,
                "type": 4
            },
            {
                "name": "blue x",
                "value": true,
                "type": 4
            },
            {
                "name": "blue y",
                "value": true,
                "type": 4
            },
            {
                "name": "white x",
                "value": true,
                "type": 4
            },
            {
                "name": "white y",
                "value": true,
                "type": 4
            },
            {
                "name": "established timings 1",
                "value": true,
                "type": 4
            },
            {
                "name": "established timings 2",
                "value": true,
                "type": 4
            },
            {
                "name": "manufactures reserved timings",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #1",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #2",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #3",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #4",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #5",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #6",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #7",
                "value": true,
                "type": 4
            },
            {
                "name": "standard timing identification #8",
                "value": true,
                "type": 4
            },
            {
                "name": "detailed timing description #1",
                "value": true,
                "type": 4
            },
            {
                "name": "detailed timing description #2",
                "value": true,
                "type": 4
            },
            {
                "name": "detailed timing description #3",
                "value": true,
                "type": 4
            },
            {
                "name": "detailed timing description #4",
                "value": true,
                "type": 4
            },
            {
                "name": "extension flag",
                "value": true,
                "type": 4
            },
            {
                "name": "checksum",
                "value": true,
                "type": 4
            }
        ]
    },
    {
        "name": "Power Test",
        "activated": false,
        "sequence": 0,
        "parameters":
        [
            {
                "name": "pattern",
                "value": 105,
                "type": 2
            },
            {
                "name": "power",
                "value": 30.5,
                "type": 3
            },
            {
                "name": "delay",
                "value": 0.5,
                "type": 3
            },
            {
                "name": "low power",
                "value": 0.5,
                "type": 3
            },
            {
                "name": "sampling",
                "value": 1,
                "type": 2
            }
        ],
    },
    {
        "name": "StandBy Test",
        "activated": false,
        "sequence": 0,
        "parameters":
        [
            {
                "name": "sdb timing",
                "value": 192,
                "type": 2
            },
            {
                "name": "power",
                "value": 0.5,
                "type": 3
            },
            {
                "name": "delay",
                "value": 7.0,
                "type": 3
            },
            {
                "name": "sampling",
                "value": 3,
                "type": 2
            }
        ],
    },
    {
        "name": "GrayLevel Test",
        "activated": false,
        "sequence": 0,
        "parameters":
        [
            {
                "name": "gray pattern",
                "value": 42,
                "type": 2
            },
            {
                "name": "blue pattern",
                "value": 105,
                "type": 2
            },
            {
                "name": "delay",
                "value": 0.4,
                "type": 3
            },
            {
                "name": "sampling",
                "value": 1,
                "type": 2
            },
            {
                "name": "bars",
                "value": 32,
                "type": 2
            },
            {
                "name": "chroma delay",
                "value": 0.2,
                "type": 3
            },
            {
                "name": "limit x min",
                "value": 0.290,
                "type": 3
            },
            {
                "name": "limit x max",
                "value": 0.320,
                "type": 3
            },
            {
                "name": "limit y min",
                "value": 0.300,
                "type": 3
            },{
                "name": "limit y max",
                "value": 0.330,
                "type": 3
            }
        ],
    },
    {
        "name": "ServiceTag Test",
        "activated": false,
        "sequence": 0,
        "parameters":
        [
            {
                "name": "delay",
                "value": 0.1,
                "type": 3
            },
            {
                "name": "sampling",
                "value": 1,
                "type": 2
            },
            {
                "name": "barcode type",
                "value": 1,
                "type": 2
            },
            {
                "name": "device",
                "value": 1,
                "type": 2
            }
        ],
    },
    {
        "name": "HDMI Test",
        "activated": false,
        "sequence": 0,
        "parameters":
        [
            {
                "name": "delay",
                "value": 0.1,
                "type": 3
            },
            {
                "name": "sampling",
                "value": 1,
                "type": 2
            },
            {
                "name": "pattern",
                "value": 84,
                "type": 2
            },
            {
                "name": "hdmi timing",
                "value": 352,
                "type": 2
            }
        ],
    }
];

module.exports = tests;