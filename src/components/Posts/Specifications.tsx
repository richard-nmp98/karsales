import { PostEntity } from '@/graphql/type.interface';
import { CONDITIONTYPE, TRANSMISSIONTYPE } from '@/helpers/constant';
import React, { memo } from 'react';

type Props = {
	specifications: PostEntity;
};

const Specifications: React.FC<Props> = (props) => {
	return (
		<>
			<div className="info justify-start grid grid-cols-12 gap-[5px]">
				<div className="col-span-6">
					{[
						{
							name: 'location',
							value: props.specifications?.city?.name ?? '-',
						},
						{
							name: 'kilometers',
							value: props.specifications?.odometer?.toLocaleString('it-IT') ?? '-',
						},
						{
							name: 'transmission',
							value: TRANSMISSIONTYPE.find((it) => it?.value === props.specifications?.transmission)?.text ?? '-',
						},
					].map((param, key) => (
						<div className="flex items-start gap-[6px] mb-[5px]" key={key}>
							<img className="w-[11px] mt-[3px]" src={`/images/icons/${param?.name}.svg`} alt="" />
							<span className="font-bold text-[11px]">{param?.value ?? '-'}</span>
						</div>
					))}
				</div>
				<div className="col-span-6">
					{[
						{
							name: 'year',
							value: props.specifications?.year ?? '-',
						},
						{
							name: 'engine',
							value: props.specifications?.fuelType?.name ?? '-',
						},
						{
							name: 'conditionCar',
							value: CONDITIONTYPE.find((it) => it?.value === props.specifications?.condition)?.text ?? '-',
						},
					].map((param, key) => (
						<div className="flex items-start gap-[6px] mb-[5px]" key={key}>
							<img className="w-[11px] mt-[3px]" src={`/images/icons/${param?.name}.svg`} alt="" />
							<span className="font-bold text-[11px]">{param?.value ?? '-'}</span>
						</div>
					))}
				</div>
			</div>
			<div className="min-w-[100px] col-span-12">
				<div className="flex items-start gap-[6px] mb-[5px]">
					<img className="w-[11px] mt-[2px]" src={`/images/icons/user.svg`} alt="" />
					<p className="font-bold text-[11px]" style={{ width: 'calc(100% - 11px - 10px)' }}>
						{props.specifications?.user?.firstName} {props.specifications?.user?.lastName}
					</p>
				</div>
			</div>
		</>
	);
};

export default memo(Specifications);
