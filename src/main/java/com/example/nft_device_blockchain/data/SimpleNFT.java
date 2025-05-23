package com.example.nft_device_blockchain.data;

import io.reactivex.Flowable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import org.web3j.abi.EventEncoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.Bool;
import org.web3j.abi.datatypes.Event;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.RemoteFunctionCall;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.response.BaseEventResponse;
import org.web3j.protocol.core.methods.response.Log;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/LFDT-web3j/web3j/tree/main/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 1.7.0.
 */
@SuppressWarnings("rawtypes")
public class SimpleNFT extends Contract {
    public static final String BINARY = "0x608060405234801561001057600080fd5b506040518060400160405280600981526020017f53696d706c654e465400000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f534e465400000000000000000000000000000000000000000000000000000000815250816000908161008c91906102fc565b50806001908161009c91906102fc565b50505060006006819055506103ce565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061012d57607f821691505b6020821081036101405761013f6100e6565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026101a87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261016b565b6101b2868361016b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006101f96101f46101ef846101ca565b6101d4565b6101ca565b9050919050565b6000819050919050565b610213836101de565b61022761021f82610200565b848454610178565b825550505050565b600090565b61023c61022f565b61024781848461020a565b505050565b5b8181101561026b57610260600082610234565b60018101905061024d565b5050565b601f8211156102b05761028181610146565b61028a8461015b565b81016020851015610299578190505b6102ad6102a58561015b565b83018261024c565b50505b505050565b600082821c905092915050565b60006102d3600019846008026102b5565b1980831691505092915050565b60006102ec83836102c2565b9150826002028217905092915050565b610305826100ac565b67ffffffffffffffff81111561031e5761031d6100b7565b5b6103288254610115565b61033382828561026f565b600060209050601f8311600181146103665760008415610354578287015190505b61035e85826102e0565b8655506103c6565b601f19841661037486610146565b60005b8281101561039c57848901518255600182019150602085019450602081019050610377565b868310156103b957848901516103b5601f8916826102c2565b8355505b6001600288020188555050505b505050505050565b611edd806103dd6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636a62784211610097578063b88d4fde11610066578063b88d4fde14610296578063c87b56dd146102b2578063d082e381146102e2578063e985e9c514610300576100f5565b80636a627842146101fc57806370a082311461022c57806395d89b411461025c578063a22cb4651461027a576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd1461019457806342842e0e146101b05780636352211e146101cc576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f91906116b0565b610330565b60405161012191906116f8565b60405180910390f35b610132610412565b60405161013f91906117a3565b60405180910390f35b610162600480360381019061015d91906117fb565b6104a4565b60405161016f9190611869565b60405180910390f35b610192600480360381019061018d91906118b0565b6104c0565b005b6101ae60048036038101906101a991906118f0565b6104d6565b005b6101ca60048036038101906101c591906118f0565b6105d8565b005b6101e660048036038101906101e191906117fb565b6105f8565b6040516101f39190611869565b60405180910390f35b61021660048036038101906102119190611943565b61060a565b604051610223919061197f565b60405180910390f35b61024660048036038101906102419190611943565b61063d565b604051610253919061197f565b60405180910390f35b6102646106f7565b60405161027191906117a3565b60405180910390f35b610294600480360381019061028f91906119c6565b610789565b005b6102b060048036038101906102ab9190611b3b565b61079f565b005b6102cc60048036038101906102c791906117fb565b6107c4565b6040516102d991906117a3565b60405180910390f35b6102ea61082d565b6040516102f7919061197f565b60405180910390f35b61031a60048036038101906103159190611bbe565b610833565b60405161032791906116f8565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103fb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061040b575061040a826108c7565b5b9050919050565b60606000805461042190611c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461044d90611c2d565b801561049a5780601f1061046f5761010080835404028352916020019161049a565b820191906000526020600020905b81548152906001019060200180831161047d57829003601f168201915b5050505050905090565b60006104af82610931565b506104b9826109b9565b9050919050565b6104d282826104cd6109f6565b6109fe565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105485760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161053f9190611869565b60405180910390fd5b600061055c83836105576109f6565b610a10565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105d2578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016105c993929190611c5e565b60405180910390fd5b50505050565b6105f38383836040518060200160405280600081525061079f565b505050565b600061060382610931565b9050919050565b600080600654905061061c8382610c2a565b6006600081548092919061062f90611cc4565b919050555080915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106b05760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016106a79190611869565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461070690611c2d565b80601f016020809104026020016040519081016040528092919081815260200182805461073290611c2d565b801561077f5780601f106107545761010080835404028352916020019161077f565b820191906000526020600020905b81548152906001019060200180831161076257829003601f168201915b5050505050905090565b61079b6107946109f6565b8383610c48565b5050565b6107aa8484846104d6565b6107be6107b56109f6565b85858585610db7565b50505050565b60606107cf82610931565b5060006107da610f68565b905060008151116107fa5760405180602001604052806000815250610825565b8061080484610f7f565b604051602001610815929190611d48565b6040516020818303038152906040525b915050919050565b60065481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008061093d8361104d565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109b057826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016109a7919061197f565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610a0b838383600161108a565b505050565b600080610a1c8461104d565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610a5e57610a5d81848661124f565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610aef57610aa060008560008061108a565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610b72576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b610c44828260405180602001604052806000815250611313565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610cb957816040517f5b08ba18000000000000000000000000000000000000000000000000000000008152600401610cb09190611869565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610daa91906116f8565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115610f61578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b8152600401610e169493929190611dc1565b6020604051808303816000875af1925050508015610e5257506040513d601f19601f82011682018060405250810190610e4f9190611e22565b60015b610ed6573d8060008114610e82576040519150601f19603f3d011682016040523d82523d6000602084013e610e87565b606091505b506000815103610ece57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610ec59190611869565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610f5f57836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401610f569190611869565b60405180910390fd5b505b5050505050565b606060405180602001604052806000815250905090565b606060006001610f8e84611337565b01905060008167ffffffffffffffff811115610fad57610fac611a10565b5b6040519080825280601f01601f191660200182016040528015610fdf5781602001600182028036833780820191505090505b509050600082602001820190505b600115611042578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161103657611035611e4f565b5b04945060008503610fed575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806110c35750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156111f75760006110d384610931565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561113e57508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611151575061114f8184610833565b155b1561119357826040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815260040161118a9190611869565b60405180910390fd5b81156111f557838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b61125a83838361148a565b61130e57600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036112cf57806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016112c6919061197f565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611305929190611e7e565b60405180910390fd5b505050565b61131d838361154b565b6113326113286109f6565b6000858585610db7565b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611395577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161138b5761138a611e4f565b5b0492506040810190505b6d04ee2d6d415b85acef810000000083106113d2576d04ee2d6d415b85acef810000000083816113c8576113c7611e4f565b5b0492506020810190505b662386f26fc10000831061140157662386f26fc1000083816113f7576113f6611e4f565b5b0492506010810190505b6305f5e100831061142a576305f5e10083816114205761141f611e4f565b5b0492506008810190505b612710831061144f57612710838161144557611444611e4f565b5b0492506004810190505b60648310611472576064838161146857611467611e4f565b5b0492506002810190505b600a8310611481576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561154257508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061150357506115028484610833565b5b8061154157508273ffffffffffffffffffffffffffffffffffffffff16611529836109b9565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115bd5760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016115b49190611869565b60405180910390fd5b60006115cb83836000610a10565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461163f5760006040517f73c6ac6e0000000000000000000000000000000000000000000000000000000081526004016116369190611869565b60405180910390fd5b505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61168d81611658565b811461169857600080fd5b50565b6000813590506116aa81611684565b92915050565b6000602082840312156116c6576116c561164e565b5b60006116d48482850161169b565b91505092915050565b60008115159050919050565b6116f2816116dd565b82525050565b600060208201905061170d60008301846116e9565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561174d578082015181840152602081019050611732565b60008484015250505050565b6000601f19601f8301169050919050565b600061177582611713565b61177f818561171e565b935061178f81856020860161172f565b61179881611759565b840191505092915050565b600060208201905081810360008301526117bd818461176a565b905092915050565b6000819050919050565b6117d8816117c5565b81146117e357600080fd5b50565b6000813590506117f5816117cf565b92915050565b6000602082840312156118115761181061164e565b5b600061181f848285016117e6565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061185382611828565b9050919050565b61186381611848565b82525050565b600060208201905061187e600083018461185a565b92915050565b61188d81611848565b811461189857600080fd5b50565b6000813590506118aa81611884565b92915050565b600080604083850312156118c7576118c661164e565b5b60006118d58582860161189b565b92505060206118e6858286016117e6565b9150509250929050565b6000806000606084860312156119095761190861164e565b5b60006119178682870161189b565b93505060206119288682870161189b565b9250506040611939868287016117e6565b9150509250925092565b6000602082840312156119595761195861164e565b5b60006119678482850161189b565b91505092915050565b611979816117c5565b82525050565b60006020820190506119946000830184611970565b92915050565b6119a3816116dd565b81146119ae57600080fd5b50565b6000813590506119c08161199a565b92915050565b600080604083850312156119dd576119dc61164e565b5b60006119eb8582860161189b565b92505060206119fc858286016119b1565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a4882611759565b810181811067ffffffffffffffff82111715611a6757611a66611a10565b5b80604052505050565b6000611a7a611644565b9050611a868282611a3f565b919050565b600067ffffffffffffffff821115611aa657611aa5611a10565b5b611aaf82611759565b9050602081019050919050565b82818337600083830152505050565b6000611ade611ad984611a8b565b611a70565b905082815260208101848484011115611afa57611af9611a0b565b5b611b05848285611abc565b509392505050565b600082601f830112611b2257611b21611a06565b5b8135611b32848260208601611acb565b91505092915050565b60008060008060808587031215611b5557611b5461164e565b5b6000611b638782880161189b565b9450506020611b748782880161189b565b9350506040611b85878288016117e6565b925050606085013567ffffffffffffffff811115611ba657611ba5611653565b5b611bb287828801611b0d565b91505092959194509250565b60008060408385031215611bd557611bd461164e565b5b6000611be38582860161189b565b9250506020611bf48582860161189b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611c4557607f821691505b602082108103611c5857611c57611bfe565b5b50919050565b6000606082019050611c73600083018661185a565b611c806020830185611970565b611c8d604083018461185a565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ccf826117c5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611d0157611d00611c95565b5b600182019050919050565b600081905092915050565b6000611d2282611713565b611d2c8185611d0c565b9350611d3c81856020860161172f565b80840191505092915050565b6000611d548285611d17565b9150611d608284611d17565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000611d9382611d6c565b611d9d8185611d77565b9350611dad81856020860161172f565b611db681611759565b840191505092915050565b6000608082019050611dd6600083018761185a565b611de3602083018661185a565b611df06040830185611970565b8181036060830152611e028184611d88565b905095945050505050565b600081519050611e1c81611684565b92915050565b600060208284031215611e3857611e3761164e565b5b6000611e4684828501611e0d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000604082019050611e93600083018561185a565b611ea06020830184611970565b939250505056fea264697066735822122013e11173d578985f7da3a455e645ce2850a4174f03701f293ada96fc729bb20564736f6c634300081c0033";

    private static String librariesLinkedBinary;

    public static final String FUNC_APPROVE = "approve";

    public static final String FUNC_BALANCEOF = "balanceOf";

    public static final String FUNC_GETAPPROVED = "getApproved";

    public static final String FUNC_ISAPPROVEDFORALL = "isApprovedForAll";

    public static final String FUNC_MINT = "mint";

    public static final String FUNC_NAME = "name";

    public static final String FUNC_OWNEROF = "ownerOf";

    public static final String FUNC_safeTransferFrom = "safeTransferFrom";

    public static final String FUNC_SETAPPROVALFORALL = "setApprovalForAll";

    public static final String FUNC_SUPPORTSINTERFACE = "supportsInterface";

    public static final String FUNC_SYMBOL = "symbol";

    public static final String FUNC_TOKENCOUNTER = "tokenCounter";

    public static final String FUNC_TOKENURI = "tokenURI";

    public static final String FUNC_TRANSFERFROM = "transferFrom";

    public static final Event APPROVAL_EVENT = new Event("Approval", 
            Arrays.<TypeReference<?>>asList(new TypeReference<Address>(true) {}, new TypeReference<Address>(true) {}, new TypeReference<Uint256>(true) {}));
    ;

    public static final Event APPROVALFORALL_EVENT = new Event("ApprovalForAll", 
            Arrays.<TypeReference<?>>asList(new TypeReference<Address>(true) {}, new TypeReference<Address>(true) {}, new TypeReference<Bool>() {}));
    ;

    public static final Event TRANSFER_EVENT = new Event("Transfer", 
            Arrays.<TypeReference<?>>asList(new TypeReference<Address>(true) {}, new TypeReference<Address>(true) {}, new TypeReference<Uint256>(true) {}));
    ;

    @Deprecated
    protected SimpleNFT(String contractAddress, Web3j web3j, Credentials credentials,
            BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected SimpleNFT(String contractAddress, Web3j web3j, Credentials credentials,
            ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected SimpleNFT(String contractAddress, Web3j web3j, TransactionManager transactionManager,
            BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected SimpleNFT(String contractAddress, Web3j web3j, TransactionManager transactionManager,
            ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public List<ApprovalEventResponse> getApprovalEvents(
            TransactionReceipt transactionReceipt) {
        List<Contract.EventValuesWithLog> valueList = extractEventParametersWithLog(APPROVAL_EVENT, transactionReceipt);
        ArrayList<ApprovalEventResponse> responses = new ArrayList<ApprovalEventResponse>(valueList.size());
        for (Contract.EventValuesWithLog eventValues : valueList) {
            ApprovalEventResponse typedResponse = new ApprovalEventResponse();
            typedResponse.log = eventValues.getLog();
            typedResponse.owner = (String) eventValues.getIndexedValues().get(0).getValue();
            typedResponse.approved = (String) eventValues.getIndexedValues().get(1).getValue();
            typedResponse.tokenId = (BigInteger) eventValues.getIndexedValues().get(2).getValue();
            responses.add(typedResponse);
        }
        return responses;
    }

    public static ApprovalEventResponse getApprovalEventFromLog(Log log) {
        Contract.EventValuesWithLog eventValues = staticExtractEventParametersWithLog(APPROVAL_EVENT, log);
        ApprovalEventResponse typedResponse = new ApprovalEventResponse();
        typedResponse.log = log;
        typedResponse.owner = (String) eventValues.getIndexedValues().get(0).getValue();
        typedResponse.approved = (String) eventValues.getIndexedValues().get(1).getValue();
        typedResponse.tokenId = (BigInteger) eventValues.getIndexedValues().get(2).getValue();
        return typedResponse;
    }

    public Flowable<ApprovalEventResponse> approvalEventFlowable(EthFilter filter) {
        return web3j.ethLogFlowable(filter).map(log -> getApprovalEventFromLog(log));
    }

    public Flowable<ApprovalEventResponse> approvalEventFlowable(DefaultBlockParameter startBlock,
            DefaultBlockParameter endBlock) {
        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
        filter.addSingleTopic(EventEncoder.encode(APPROVAL_EVENT));
        return approvalEventFlowable(filter);
    }

    public List<ApprovalForAllEventResponse> getApprovalForAllEvents(
            TransactionReceipt transactionReceipt) {
        List<Contract.EventValuesWithLog> valueList = extractEventParametersWithLog(APPROVAL_EVENT, transactionReceipt);
        ArrayList<ApprovalForAllEventResponse> responses = new ArrayList<ApprovalForAllEventResponse>(valueList.size());
        for (Contract.EventValuesWithLog eventValues : valueList) {
            ApprovalForAllEventResponse typedResponse = new ApprovalForAllEventResponse();
            typedResponse.log = eventValues.getLog();
            typedResponse.owner = (String) eventValues.getIndexedValues().get(0).getValue();
            typedResponse.operator = (String) eventValues.getIndexedValues().get(1).getValue();
            typedResponse.approved = (Boolean) eventValues.getNonIndexedValues().get(0).getValue();
            responses.add(typedResponse);
        }
        return responses;
    }

    public static ApprovalForAllEventResponse getApprovalForAllEventFromLog(Log log) {
        Contract.EventValuesWithLog eventValues = staticExtractEventParametersWithLog(APPROVALFORALL_EVENT, log);
        ApprovalForAllEventResponse typedResponse = new ApprovalForAllEventResponse();
        typedResponse.log = log;
        typedResponse.owner = (String) eventValues.getIndexedValues().get(0).getValue();
        typedResponse.operator = (String) eventValues.getIndexedValues().get(1).getValue();
        typedResponse.approved = (Boolean) eventValues.getNonIndexedValues().get(0).getValue();
        return typedResponse;
    }

    public Flowable<ApprovalForAllEventResponse> approvalForAllEventFlowable(EthFilter filter) {
        return web3j.ethLogFlowable(filter).map(log -> getApprovalForAllEventFromLog(log));
    }

    public Flowable<ApprovalForAllEventResponse> approvalForAllEventFlowable(
            DefaultBlockParameter startBlock, DefaultBlockParameter endBlock) {
        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
        filter.addSingleTopic(EventEncoder.encode(APPROVALFORALL_EVENT));
        return approvalForAllEventFlowable(filter);
    }

    public List<TransferEventResponse> getTransferEvents(
            TransactionReceipt transactionReceipt) {
        List<Contract.EventValuesWithLog> valueList = extractEventParametersWithLog(APPROVAL_EVENT, transactionReceipt);
        ArrayList<TransferEventResponse> responses = new ArrayList<TransferEventResponse>(valueList.size());
        for (Contract.EventValuesWithLog eventValues : valueList) {
            TransferEventResponse typedResponse = new TransferEventResponse();
            typedResponse.log = eventValues.getLog();
            typedResponse.from = (String) eventValues.getIndexedValues().get(0).getValue();
            typedResponse.to = (String) eventValues.getIndexedValues().get(1).getValue();
            typedResponse.tokenId = (BigInteger) eventValues.getIndexedValues().get(2).getValue();
            responses.add(typedResponse);
        }
        return responses;
    }

    public static TransferEventResponse getTransferEventFromLog(Log log) {
        Contract.EventValuesWithLog eventValues = staticExtractEventParametersWithLog(TRANSFER_EVENT, log);
        TransferEventResponse typedResponse = new TransferEventResponse();
        typedResponse.log = log;
        typedResponse.from = (String) eventValues.getIndexedValues().get(0).getValue();
        typedResponse.to = (String) eventValues.getIndexedValues().get(1).getValue();
        typedResponse.tokenId = (BigInteger) eventValues.getIndexedValues().get(2).getValue();
        return typedResponse;
    }

    public Flowable<TransferEventResponse> transferEventFlowable(EthFilter filter) {
        return web3j.ethLogFlowable(filter).map(log -> getTransferEventFromLog(log));
    }

    public Flowable<TransferEventResponse> transferEventFlowable(DefaultBlockParameter startBlock,
            DefaultBlockParameter endBlock) {
        EthFilter filter = new EthFilter(startBlock, endBlock, getContractAddress());
        filter.addSingleTopic(EventEncoder.encode(TRANSFER_EVENT));
        return transferEventFlowable(filter);
    }

    public RemoteFunctionCall<TransactionReceipt> approve(String to, BigInteger tokenId) {
        final Function function = new Function(
                FUNC_APPROVE, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, to), 
                new org.web3j.abi.datatypes.generated.Uint256(tokenId)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<BigInteger> balanceOf(String owner) {
        final Function function = new Function(FUNC_BALANCEOF, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, owner)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}));
        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
    }

    public RemoteFunctionCall<String> getApproved(BigInteger tokenId) {
        final Function function = new Function(FUNC_GETAPPROVED, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(tokenId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteFunctionCall<Boolean> isApprovedForAll(String owner, String operator) {
        final Function function = new Function(FUNC_ISAPPROVEDFORALL, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, owner), 
                new org.web3j.abi.datatypes.Address(160, operator)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}));
        return executeRemoteCallSingleValueReturn(function, Boolean.class);
    }

    public RemoteFunctionCall<TransactionReceipt> mint(String to) {
        final Function function = new Function(
                FUNC_MINT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, to)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<String> name() {
        final Function function = new Function(FUNC_NAME, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteFunctionCall<String> ownerOf(BigInteger tokenId) {
        final Function function = new Function(FUNC_OWNEROF, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(tokenId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteFunctionCall<TransactionReceipt> safeTransferFrom(String from, String to,
            BigInteger tokenId) {
        final Function function = new Function(
                FUNC_safeTransferFrom, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, from), 
                new org.web3j.abi.datatypes.Address(160, to), 
                new org.web3j.abi.datatypes.generated.Uint256(tokenId)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<TransactionReceipt> safeTransferFrom(String from, String to,
            BigInteger tokenId, byte[] data) {
        final Function function = new Function(
                FUNC_safeTransferFrom, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, from), 
                new org.web3j.abi.datatypes.Address(160, to), 
                new org.web3j.abi.datatypes.generated.Uint256(tokenId), 
                new org.web3j.abi.datatypes.DynamicBytes(data)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<TransactionReceipt> setApprovalForAll(String operator,
            Boolean approved) {
        final Function function = new Function(
                FUNC_SETAPPROVALFORALL, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, operator), 
                new org.web3j.abi.datatypes.Bool(approved)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    public RemoteFunctionCall<Boolean> supportsInterface(byte[] interfaceId) {
        final Function function = new Function(FUNC_SUPPORTSINTERFACE, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Bytes4(interfaceId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}));
        return executeRemoteCallSingleValueReturn(function, Boolean.class);
    }

    public RemoteFunctionCall<String> symbol() {
        final Function function = new Function(FUNC_SYMBOL, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteFunctionCall<BigInteger> tokenCounter() {
        final Function function = new Function(FUNC_TOKENCOUNTER, 
                Arrays.<Type>asList(), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}));
        return executeRemoteCallSingleValueReturn(function, BigInteger.class);
    }

    public RemoteFunctionCall<String> tokenURI(BigInteger tokenId) {
        final Function function = new Function(FUNC_TOKENURI, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(tokenId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}));
        return executeRemoteCallSingleValueReturn(function, String.class);
    }

    public RemoteFunctionCall<TransactionReceipt> transferFrom(String from, String to,
            BigInteger tokenId) {
        final Function function = new Function(
                FUNC_TRANSFERFROM, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.Address(160, from), 
                new org.web3j.abi.datatypes.Address(160, to), 
                new org.web3j.abi.datatypes.generated.Uint256(tokenId)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function);
    }

    @Deprecated
    public static SimpleNFT load(String contractAddress, Web3j web3j, Credentials credentials,
            BigInteger gasPrice, BigInteger gasLimit) {
        return new SimpleNFT(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static SimpleNFT load(String contractAddress, Web3j web3j,
            TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new SimpleNFT(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static SimpleNFT load(String contractAddress, Web3j web3j, Credentials credentials,
            ContractGasProvider contractGasProvider) {
        return new SimpleNFT(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static SimpleNFT load(String contractAddress, Web3j web3j,
            TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new SimpleNFT(contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public static RemoteCall<SimpleNFT> deploy(Web3j web3j, Credentials credentials,
            ContractGasProvider contractGasProvider) {
        return deployRemoteCall(SimpleNFT.class, web3j, credentials, contractGasProvider, getDeploymentBinary(), "");
    }

    public static RemoteCall<SimpleNFT> deploy(Web3j web3j, TransactionManager transactionManager,
            ContractGasProvider contractGasProvider) {
        return deployRemoteCall(SimpleNFT.class, web3j, transactionManager, contractGasProvider, getDeploymentBinary(), "");
    }

    @Deprecated
    public static RemoteCall<SimpleNFT> deploy(Web3j web3j, Credentials credentials,
            BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(SimpleNFT.class, web3j, credentials, gasPrice, gasLimit, getDeploymentBinary(), "");
    }

    @Deprecated
    public static RemoteCall<SimpleNFT> deploy(Web3j web3j, TransactionManager transactionManager,
            BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(SimpleNFT.class, web3j, transactionManager, gasPrice, gasLimit, getDeploymentBinary(), "");
    }

    /*public static void linkLibraries(List<Contract.LinkReference> references) {
        librariesLinkedBinary = linkBinaryWithReferences(BINARY, references);
    }*/

    private static String getDeploymentBinary() {
        if (librariesLinkedBinary != null) {
            return librariesLinkedBinary;
        } else {
            return BINARY;
        }
    }

    public static class ApprovalEventResponse extends BaseEventResponse {
        public String owner;

        public String approved;

        public BigInteger tokenId;
    }

    public static class ApprovalForAllEventResponse extends BaseEventResponse {
        public String owner;

        public String operator;

        public Boolean approved;
    }

    public static class TransferEventResponse extends BaseEventResponse {
        public String from;

        public String to;

        public BigInteger tokenId;
    }
}
