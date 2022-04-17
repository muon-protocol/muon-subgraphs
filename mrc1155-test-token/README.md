# MRC1155 Subgraphs

# Compile
npx graph-compiler \\
<br/>--config sample.json \\
<br/>--include node_modules/@openzeppelin/subgraphs/src/datasources \\
<br/>--export-schema \\
<br/>--export-subgraph

Note: Replace sample.json with desired config file e.g. configs/mrc1155-rinkeby.json

# Deploy

1- npx graph-cli codegen generated/mrc1155.subgraph.yaml  
2- npx graph-cli build generated/mrc1155.subgraph.yaml  
3- npx graph-cli deploy                 \\
<br/>--ipfs https://api.thegraph.com/ipfs/   \\
<br/>--node https://api.thegraph.com/deploy/ \\
<br/>username/subgraphname                   \\
<br/>generated/mrc1155.subgraph.yaml

Note: Replace username/subgraphname with yours
