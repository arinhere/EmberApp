import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
    model(){
        return [
            'Jagadish Bose', 
            'Satyen Bose', 
            'Issac Newton', 
            'Albert Einstien',
            'Graham Bell', 
            'Thomas Alva Edison'
        ];
    }
}
