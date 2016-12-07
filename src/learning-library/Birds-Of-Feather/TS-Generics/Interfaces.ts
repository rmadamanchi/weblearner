// fragment:ts //
interface Pair<K, V> {
    getFirst: () => K;
    getSecond: () => V;
}

class Strings implements Pair<string, string> {
    getFirst() {
        return "first";
    }

    getSecond() {
        return "second";
    }

}

class Numbers implements Pair<number, number> {
    getFirst() {
        return 1;
    }

    getSecond() {
        return 2;
    }

}