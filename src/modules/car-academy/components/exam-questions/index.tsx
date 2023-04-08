import React from 'react';
import { Wrapper } from './styled';
import Link from 'next/link';
import { convertToSlug } from '@/helpers/common';

type PropsTheory = {
	list?: any[];
	link?: string;
	numQuestion?: number;
};

const ListExam: React.FC<{ list?: any[]; link?: string }> = ({ list, link }) => {
	return (
		<div className="grid grid-cols-12 lg:gap-[14px] sm:gap-[8px] gap-2">
			{list?.map((item, index) => (
				<Link
					key={index}
					className="lg:col-span-3 sm:col-span-4 ssm:col-span-2 sssm:col-span-3 col-span-4 border-[1px] border-[#D9D9D9] rounded h-[40px] flex justify-center items-center bg-[#F0F0F0] text-blue-main"
					href={`${link}/${convertToSlug(item.name)}-${item.id.substring(item.id.length - 2, item.id.length)}`}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export const ExamQuestionTheory: React.FC<PropsTheory> = (props) => {
	return (
		<>
			<Wrapper>
				<div className="title">
					<p className="font-normal lg:text-[32px] sm:text-[24px] text-[20px] text-blue-main mb-[20px]">
						Bộ {props?.numQuestion} Câu Hỏi - {props.list?.length ?? 0} Bộ Đề Thi Thử Bằng B2
					</p>
				</div>
				<div className="grid grid-cols-12 lg:gap-5 md:gap-10 sm:gap-5">
					<div className="sm:col-span-5 col-span-12 sm:mb-0 mb-[20px]">
						<ListExam list={props.list} link={props.link} />
					</div>
					<div className="col-span-1 lg:block lg:relative absolute hidden" />
					<div className="lg:col-span-6 sm:col-span-7 col-span-12">
						<p className="mb-[33px]">
							Trong 18 đề thi sát hạch lái xe B2 mỗi đề gồm 35 câu hỏi, mỗi câu hỏi chỉ có duy nhất 1 đáp án đúng. Cấu
							trúc 600 câu hỏi sát hạch lái xe B2 có đáp án áp dụng vào mỗi đề thi thi thử lý thuyết B2 này sẽ gồm: 1
							câu hỏi phần khái niệm; 7 câu hỏi về quy tắc giao thông; 1 câu hỏi nghiệp vụ vận tải; 1 câu về tốc độ
							khoảng cách; 1 câu hỏi về văn hóa & đạo đức người lái xe; 2 câu hỏi về kỹ thuật lái xe; câu hỏi về cấu tạo
							sữa chữa; 0 câu hỏi biển báo; 10 câu hỏi sa hình
							<br />
							<br />
							Kèm theo 1 câu hỏi điểm liệt (tình huống gây mất an toàn giao thông nghiêm trọng).
						</p>
						<p className="font-bold">
							<span className="">Số câu cần đạt:</span>&nbsp;
							<span className="text-pink-main">32/35 câu trở lên là đậu.</span>
						</p>
						<p className="font-bold">
							<span className="">Thời gian làm bài:</span>&nbsp;
							<span className="text-pink-main">22 phút.</span>
						</p>
						<p className="font-bold">
							<span className="">Đặc biệt:</span>&nbsp;
							<span className="text-pink-main">KHÔNG LÀM SAI CÂU ĐIỂM LIỆT (câu hỏi *)</span>
						</p>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

type PropsSimulation = {
	list?: any[];
	link?: string;
};

export const ExamQuestionSimulation: React.FC<PropsSimulation> = (props) => {
	return (
		<>
			<Wrapper>
				<div className="title">
					<p className="font-normal lg:text-[32px] sm:text-[24px] text-[20px] text-blue-main mb-[20px]">
						Bộ đề Mô phỏng
					</p>
				</div>
				<div className="grid grid-cols-12 lg:gap-5 md:gap-10 sm:gap-5">
					<div className="sm:col-span-5 col-span-12 sm:mb-0 mb-[20px]">
						<ListExam list={props.list} link={props.link} />
					</div>
					<div className="col-span-1 lg:block lg:relative absolute hidden" />
					<div className="lg:col-span-6 sm:col-span-7 col-span-12">
						<p className="mb-[33px]">
							Trong 18 đề thi sát hạch lái xe B2 mỗi đề gồm 35 câu hỏi, mỗi câu hỏi chỉ có duy nhất
						</p>
						<p className="font-bold">
							<span className="">Số câu cần đạt:</span>&nbsp;
							<span className="text-pink-main">35/50 câu trở lên là đậu.</span>
						</p>
						<p className="font-bold">
							<span className="">Tổng số tình huống:</span>&nbsp;
							<span className="text-pink-main">10</span>
						</p>
					</div>
				</div>
			</Wrapper>
		</>
	);
};
