# MRC1155 Subgraphs

# Compile
npx graph-compiler \
  --config sample.json \
  --include node_modules/@openzeppelin/subgraphs/src/datasources \
  --export-schema \
  --export-subgraph

Note: Replace sample.json with desired config file e.g. configs/mrc1155-rinkeby.json

# Deploy

1- npx graph-cli codegen generated/mrc1155.subgraph.yaml  
2- npx graph-cli build generated/mrc1155.subgraph.yaml  
3- npx graph-cli deploy                     \
    --ipfs https://api.thegraph.com/ipfs/   \
    --node https://api.thegraph.com/deploy/ \
    username/subgraphname                   \
    generated/mrc1155.subgraph.yaml

Note: Replace username/subgraphname with yours
