angular.module("zooApp").factory("articlesFactory", articlesFactory);

function articlesFactory($http) {
	return {
		articleGetAll : articleGetAll,
		articleAddOne : articleAddOne,
		articleGetOne : articleGetOne,
        articleDelete : articleDelete,
        articleUpdate : articleUpdate
	};

function articleGetAll() {
	return $http.get("/api").then(complete).catch(error);
}

function articleAddOne(postData) {
	return $http.post("/api/newarticle", postData).then(complete).catch(error);
}

function articleDelete(id) {
	return $http.delete('/api/users/' +id).then(complete).catch(error);
}

function articleGetOne(id) {
	return $http.get('/api/users/' +id).then(complete).catch(error);
}

function articleUpdate(id, article) {
	return $http.put('/api/users/update/' +id, article).then(complete).catch(error);
}

function complete(response) {
	return response;
}

function error(err) {
	return err;
}

}