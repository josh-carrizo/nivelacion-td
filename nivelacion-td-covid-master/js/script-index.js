$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
/*	for (var i=0; i<recipesArray.length; i++){
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
}*/
	recipesArray.forEach( function(recipe){
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipe);
		
	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	
	$('.list-recipes').append(
	`<a class="item-recipe" href="#">
		<span class="attribution">
	 	<span class="title-recipe">${recipe.title}</span>
	  	<span class="metadata-recipe">
			<span class="author-recipe">${recipe.source.name} </span>
			<span class="bookmarks-recipe">
		  	<span class="icon-bookmark"></span> 
		</span>
	  </span>
	</span>
  
	<img src="img/recipes/320x350/${recipe.name}.jpg" />
  </a>`
  )

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	if(activitiesArray.length > 0){
		$('wrapper-message').hide();
	}
	for (i=0; i<activitiesArray.length; i ++){
		renderActivity(activitiesArray[i]);
	}
	//console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	var template=`<a href="#" class="item-activity">

	<span class="attribution">
	  <span class="avatar">
		<img src="${activity.userAvatar}" class="image-avatar">
	  </span>
	  <span class="meta">
		<span class="author">"${activity.userName}")</span> made 
		<span class="recipe">"${activity.recipeName}")</span>: "${activity.text}") 
		<span class="location">&mdash;"${activity.place}")</span>
	  </span>
	</span>
	<div class="bg-image" style="background-image: url('IMAGEN DE RECETA (ATTRIBUTO "image")');"></div>
  </a>`
	$('.list-activities').append(template);
	
}

$(document).ready(function(){
	$('.js-menu').hide();
	console.log("Página lista");
	$('.js-show-recipe').on('click', function(ev);
	console.log("Click en el recipe");
	$('.page').removeClass('make');
	$('.js-show-make').on('click', function(ev);
	console.log("Click en el Make");
	$('.page').addClass('make');
	$('js-back').
  });

 $.ajax({
	  url:'https://swapi.dev/api/people',
	  mehotd:'GET',
	  dataType:'json',
	  success: function(data){
		  console.log(data);
	  }

  }
  )

