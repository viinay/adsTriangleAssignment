# adsTriangleAssignment
assignement


node server.js //to start the server

endpoint 1 : POST : localhost:3000/api/agency : to create agency and client
request
`{
	"agencyDetails":{
		"name":"big agency",
		"address1":"this is address1",
		"address2":"",
		"state":"maharashtra",
		"city":"mumbai",
		"phone_number":"123456789",
		"email":"vinay2@gmail.com"
	},
	"clientDetails":{
		"name":"big client",
		"email":"vinay3@gmail.com",
		"totalbill":350
	}
}`

endpoint 2 : POST : localhost:3000/api/client/:clientId : to update client
request
`{
	"name":"new client name"
}`

endpoint 3 : GET : localhost:3000/api/agency/:agencyId/top_clients : to get top 3 clients
