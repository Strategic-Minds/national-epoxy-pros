import { NextResponse } from 'next/server';
export async function POST(){return NextResponse.json({ok:true,mode:'mock-safe',message:'Digital bid request prepared for review. Live integrations are gated.'})}
