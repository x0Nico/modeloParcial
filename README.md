## Consigna

1) Armar un servidor que reciba solicitudes del tipo "Post" en un endpoint llamado "\operaciones"

2) En el Body debe recibir el siguiente JSON:
```json
[
	{
		"op1":3,
		"op2":2,
		"fn":"suma"
	},
	{
		"op1": 5,
		"op2": 5,
		"fn": "mult"
	}
]
```

3) Las funciones que deber sorportar el endpoint son:
* suma
* resta
* div
* mult
* resto

4) La respuesta que debe dar es la siguiente:

```json
[
	{
		"op1": 3,
		"op2": 2,
		"fn": "suma",
		"result": 5
	},
	{
		"op1": 5,
		"op2": 5,
		"fn": "mult",
		"result": 25
	}
]
```
