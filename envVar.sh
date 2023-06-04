export PATH=~/fabric-samples/bin:$PATH
export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/organizations/ordererOrganizations/sedob.gov/tlsca/tlsca.sedob.gov-cert.pem
export PEER0_ORG1_CA=${PWD}/organizations/peerOrganizations/org1.sedob.gov/peers/peer0.org1.sedob.gov/tls/ca.crt
export PEER0_ORG2_CA=${PWD}/organizations/peerOrganizations/org2.sedob.gov/peers/peer0.org2.sedob.gov/tls/ca.crt
export ORDERER_ADMIN_TLS_SIGN_CERT=${PWD}/organizations/ordererOrganizations/sedob.gov/orderers/orderer.sedob.gov/tls/server.crt
export ORDERER_ADMIN_TLS_PRIVATE_KEY=${PWD}/organizations/ordererOrganizations/sedob.gov/orderers/orderer.sedob.gov/tls/server.key
export ORDERER_ROOT_CERT=~/SEDoB/organizations/ordererOrganizations/sedob.gov/orderers/orderer.sedob.gov/tls/ca.crt

export CHANNEL_NAME=mychannel
export SOCK="${DOCKER_HOST:-/var/run/docker.sock}"
export DOCKER_SOCK="${SOCK##unix://}"
export BLOCKFILE="./channel-artifacts/genesis.block"
export FABRIC_CFG_PATH=./configtx

# # Environment variables for Org1  
# export CORE_PEER_LOCALMSPID="Org1MSP"
# export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_ORG1_CA
# export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.sedob.gov/users/Admin@org1.sedob.gov/msp
# export CORE_PEER_ADDRESS=localhost:7051



# for listing the channels of the orderer
# First you open configtx file where the orderer.yaml is then you do orderer start
# Second you type this command
# osnadmin channel list -o orderer.sedob.gov:7053 --ca-file $ORDERER_ROOT_CERT  --client-cert $ORDERER_TLS_SIGN_CERT --client-key $ORDERER_TLS_PRIVATE_KEY

# for joining a channel 
# osnadmin channel join -c $CHANNEL_NAME --config-block <path-to-genesis-block> -o orderer.sedob.gov:7053 --ca-file $ORDERER_ROOT_CERT  --client-cert $ORDERER_TLS_SIGN_CERT --client-key $ORDERER_TLS_PRIVATE_KEY


# # Environment variables for Org2
export CORE_PEER_LOCALMSPID="Org2MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=/home/kali/SEDoB/organizations/peerOrganizations/org2.sedob.gov/peers/peer0.org2.sedob.gov/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=/home/kali/SEDoB/organizations/peerOrganizations/org2.sedob.gov/users/Admin@org2.sedob.gov/msp
export CORE_PEER_ADDRESS=localhost:9051


# peer lifecycle chaincode approveformyorg -o localhost:7050 --ordererTLSHostnameOverride orderer.sedob.gov --channelID channel1 --name basic --version 1.0 --package-id $CC_PACKAGE_ID --sequence 1 --tls --cafile "/home/kali/SEDoB/organizations/ordererOrganizations/sedob.gov/orderers/orderer.sedob.gov/msp/tlscacerts/tlsca.sedob.gov-cert.pem"

# peer lifecycle chaincode commit -o localhost:7050 --ordererTLSHostnameOverride orderer.sedob.gov --channelID mychannel --name basic --version 1.0 --sequence 1 --tls --cafile "${PWD}/organizations/ordererOrganizations/sedob.gov/orderers/orderer.sedob.gov/msp/tlscacerts/tlsca.sedob.gov-cert.pem" --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.sedob.gov/peers/peer0.org1.sedob.gov/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.sedob.gov/peers/peer0.org2.sedob.gov/tls/ca.crt"
# peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.sedob.gov --tls --cafile "${PWD}/organizations/ordererOrganizations/sedob.gov/orderers/orderer.sedob.gov/msp/tlscacerts/tlsca.sedob.gov-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.sedob.gov/peers/peer0.org1.sedob.gov/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.sedob.gov/peers/peer0.org2.sedob.gov/tls/ca.crt" -c '{"function":"InitLedger","Args":[]}'
