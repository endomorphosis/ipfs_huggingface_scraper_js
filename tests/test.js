// import { ipfsHuggingfaceScraperJs } from '../ipfs_huggingface_scraper_js/main.js';
import { libp2pKitJs } from 'libp2p_kit_js';
import { ipfsKitJs } from 'ipfs_kit_js';
import { orbitDbKitJs } from 'orbitdb_kit_js';

export class test_ipfs_huggingface_scraper_js {
    constructor() {
        this.imports = {};
        // this.ipfs_huggingface_scraper_js = new ipfsHuggingfaceScraperJs();
        this.libp2pKitJs = new libp2pKitJs();
        this.ipfsKitJs = new ipfsKitJs();
        this.orbitDbKitJs = new orbitDbKitJs();
        this.s3Kit = this.libp2pKitJs.s3Kit
    }
    
    test() {
        console.log("Running tests for ipfs_huggingface_scraper_js/main.js");
        console.log("Running tests for ipfs_huggingface_scraper_js/index.js");
        console.log("Running tests for index.js");
    }
}

if (import.meta.url === 'file://' + process.argv[1]) {
    const test = new test_ipfs_huggingface_scraper_js();
    test.test();
}