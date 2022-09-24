class PokemonModel{
    constructor(id=1){ this.subject= new rxjs.Subject(); this.setPokemonId(id); }
    addObserver(obs){
	obs(this);
	const subscription=this.subject.subscribe(obs); 
	return ()=> subscription.unsubscribe();
    }

    notifyObservers(){ this.subject.next(this); }

    get pokemonDetails(){
	return this.promiseResult && this.promiseResult.data;
    }
    get pokemonError(){
	return this.promiseResult && this.promiseResult.error;
    }
    setPokemonId(x){
	if(x===this.pokemonId)
	    return;
	this.pokemonId=x;
	
	this.promiseResult= this.pokemonId &&
	    new PromiseResults(fetch("https://pokeapi.co/api/v2/pokemon/"+this.pokemonId).then(r=>r.json()),
			       ()=> this.notifyObservers());
	this.notifyObservers();
    }
}

class PromiseResults {
    constructor(promise, notify){
	(this.promise=promise) && promise.then(d=> this.data=d, e=> this.error=e).then(notify);
    }
}