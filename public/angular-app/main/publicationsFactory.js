angular.module("zooApp").factory("publicationsFactory", publicationsFactory);

function publicationsFactory($http) {
	return {
		publicationsGetAll : publicationsGetAll,
		publicationAddOne : publicationAddOne,
		publicationGetOne : publicationGetOne,
        publicationDelete : publicationDelete,
        publicationUpdate : publicationUpdate
	};

function publicationsGetAll() {
	return $http.get("/api/publications").then(complete).catch(error);
}

function publicationAddOne(postData) {
	return $http.post("/api/publications/add", postData).then(complete).catch(error);
}

function publicationDelete(id) {
	return $http.delete('/api/publications/' +id).then(complete).catch(error);
}

function publicationGetOne(id) {
	return $http.get('/api/publications/' +id).then(complete).catch(error);
}

function publicationUpdate(id, publication) {
	return $http.put('/api/publications/update/' +id, publication).then(complete).catch(error);
}

function complete(response) {
	return response;
}

function error(err) {
	return err;
}

}