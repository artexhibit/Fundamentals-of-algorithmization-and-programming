// инициализация JS объекта
obj = {
    "data": {
        "items": [
            {
                "code": "MGERS",
                "cost": 40000,
                "flights": [
                    {
                        "flight_id": 1,
                        "flight_code": "FP2100",
                        "from": {
                            "city": "Moscow",
                            "airport": "Sheremetyevo",
                            "iata": "SVO",
                            "date": "2020-10-01",
                            "time": "08:35"
                        },
                        "to": {
                            "city": "Kazan",
                            "airport": "Kazan",
                            "iata": "KZN",
                            "date": "2020-10-01",
                            "time": "10:05"
                        },
                        "cost": 10500,
                        "availability": 58
                    },
                    {
                        "flight_id": 2,
                        "flight_code": "FP1200",
                        "from": {
                            "city": "Kazan",
                            "airport": "Kazan",
                            "iata": "KZN",
                            "date": "2020-10-12",
                            "time": "12:00"
                        },
                        "to": {
                            "city": "Moscow",
                            "airport": "Sheremetyevo",
                            "iata": "SVO",
                            "date": "2020-10-12",
                            "time": "13:35"
                        },
                        "cost": 9500,
                        "availability": 58
                    }
                ],
                "passengers": [
                    {
                        "id": 1,
                        "first_name": "Ivan",
                        "last_name": "Ivanov",
                        "birth_date": "1990-02-20",
                        "document_number": "1234567890",
                        "place_from": null,
                        "place_back": null
                    },
                    {
                        "id": 2,
                        "first_name": "Ivan",
                        "last_name": "Sergeev",
                        "birth_date": "1990-03-20",
                        "document_number": "1224567890",
                        "place_from": null,
                        "place_back": null
                    }
                ]
            }
        ]
    }
}