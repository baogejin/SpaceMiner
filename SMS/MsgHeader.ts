import { CodeEngine } from "./CodeEngine.ts";

export class MsgHeader {
    // 包头固定长度
    private static CONST_HEADLEN: number = 16;
    public m_iMessageID: number = 0;
    public m_iUin: number = 0;
    public m_stBody: Uint8Array = new Uint8Array(0);
    public Encode(bys: Uint8Array): ArrayBuffer {
        let buffer: ArrayBuffer = new ArrayBuffer(MsgHeader.CONST_HEADLEN + bys.length);
        let headBys: Uint8Array = new Uint8Array(buffer);

        let index: number = 0;

        index = CodeEngine.encode_int32(headBys, index, buffer.byteLength);
        index = CodeEngine.encode_int32(headBys, index, this.m_iUin);//uin
        index = CodeEngine.encode_int32(headBys, index, this.m_iMessageID);
        index = CodeEngine.encode_int32(headBys, index, bys.length);
        headBys.set(bys, index);
        return buffer;
    }

    public Decode(bys: Uint8Array): void {
        let index: number = 0;
        let msgLen: number = CodeEngine.decode_int32(bys, index); index += 4;
        let uin: number = CodeEngine.decode_int32(bys, index); index += 4;
        this.m_iMessageID = CodeEngine.decode_int32(bys, index); index += 4;
        let bodyLen: number = CodeEngine.decode_int32(bys, index); index += 4;
        this.m_stBody = bys.subarray(index);
    }
}