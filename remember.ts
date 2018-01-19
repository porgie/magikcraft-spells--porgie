const magik = magikcraft.io;

function remember(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}