require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const Model = require('./models/model');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

data = {
    "distribuidores":
        [{
            "id": 1,
            "nombre_distribuidor": "Colombia",
            "Grupos_hospitalarios": [
                {
                    "GH_name": "eps_regional1",
                    "Hospitales": [
                        {
                            "hospital_name": "Santa ana",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "0",
                                    "network_value": "ok",
                                    "ram_status": "2",
                                    "ram_value": "30%",
                                    "cpu_status": "2",
                                    "cpu_value": "29%",
                                    "drive_status": "1",
                                    "drive_value": "60%",
                                    "ledservice_status": "2",
                                    "ledservice_value": "Fail",
                                    "camera_status": "0",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "2",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        },
                        {
                            "hospital_name": "Infantil",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "2",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        }
                    ]
                },
                {
                    "DH_name": "eps_regional2",
                    "Hospitales": [
                        {
                            "hospital_name": "Minuto de Dios",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "2",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        },
                        {
                            "hospital_name": "GeriÃ¡trico",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "2",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        }
                    ]
                }
            ]

        },
        {
            "id": 2,
            "nombre_distribuidor": "Panama",
            "Grupos_hospitalarios": [
                {
                    "DH_name": "eps_regional1",
                    "Hospitales": [
                        {
                            "hospital_name": "Santa ana",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "2",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        },
                        {
                            "hospital_name": "Infantil",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "2",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        }
                    ]
                },
                {
                    "DH_name": "eps_regional2",
                    "Hospitales": [
                        {
                            "hospital_name": "Minuto de Dios",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "2",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        },
                        {
                            "hospital_name": "GeriÃ¡trico",
                            "Oscanns": [
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                },
                                {
                                    "oscann_id": "1",
                                    "network_status": "ok",
                                    "network_value": "ok",
                                    "ram_status": "Fail",
                                    "ram_value": "30%",
                                    "cpu_status": "Fail",
                                    "cpu_value": "29%",
                                    "drive_status": "Alert",
                                    "drive_value": "60%",
                                    "ledservice_status": "Fail",
                                    "ledservice_value": "Fail",
                                    "camera_status": "ok",
                                    "camera_value": "ok"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        ]
}

Model.collection.insertOne(data)

const Cron = require('./Cron/Cron');
