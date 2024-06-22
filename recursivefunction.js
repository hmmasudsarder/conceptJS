function dn(){
    if(x> 10){
        return;
    }else {
        console.log(x)
        x++;
        dn(x);
    }
}
dn()