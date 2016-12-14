angular.module("zooApp").factory("zoosFactory", zoosFactory);

function zoosFactory($http) {
	return {
		zooGetAll : zooGetAll,
		zooAddOne : zooAddOne,
		zooGetOne : zooGetOne,
        zooDelete : zooDelete,
        zooUpdate : zooUpdate
	};

function zooGetAll() {
	return $http.get("/api/").then(complete).catch(error);
}

function zooAddOne(postData) {
	return $http.post("/api/newzoo", postData).then(complete).catch(error);
}

function zooDelete(id) {
	return $http.delete('/api/zoos/' +id).then(complete).catch(error);
}

function zooGetOne(id) {
	return $http.get('/api/zoos/' +id).then(complete).catch(error);
}

function zooUpdate(id, zoo) {
	return $http.put('/api/zoos/update/' +id, zoo).then(complete).catch(error);
}

function complete(response) {
	return response;
}

function error(err) {
	return err;
}

}