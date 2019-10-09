drop table Corn_Feed_and_Residial_Usage;
create table Corn_Feed_and_Residial_Usage (
	years varchar,
	frequnecy varchar,
	attr varchar,
	commodity varchar,
	geography varchar,
	unit varchar,
	amount varchar);

select * from Corn_Feed_and_Residial_Usage;

create table corn_seed_industrial_use (
	years varchar,
	frequnecy varchar,
	attr varchar,
	commodity varchar,
	geography varchar,
	unit varchar,
	amount varchar
);


select * from corn_seed_industrial_use;

drop table corn_alchol_usage;
create table corn_alchol_usage (
	programs varchar,
	years varchar,
	periods varchar,
	 geo_level varchar,
	states varchar,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ varchar
	);



select * from corn_alchol_usage; 

drop table corn_prices_received;
create table corn_prices_received(
	programs varchar,
	years varchar,
	periods varchar,
	geo_level varchar,
	states varchar,
	state_ANSI int,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ varchar
	);
	
select * from corn_prices_received;


drop table corn_production;
create table corn_production (
	programs varchar,
	years varchar,
	periods varchar,
	geo_level varchar,
	states varchar,
	state_ANSI int,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ varchar,
	cv_percentage varchar
	);


select * from corn_production;



drop table corn_Yield_PerAcre;
create table corn_Yield_PerAcre (
	programs varchar,
	years varchar,
	periods varchar,
	geo_level varchar,
	states varchar,
	state_ANSI int,
	commodity varchar,
	data_item varchar,
	domains varchar,
	domain_category varchar,
	value_ varchar);

select  * from corn_Yield_PerAcre;

drop table Grain_Subsidies;

create table Grain_Subsidies(
	Item varchar,
	millions_subsidies varchar,
	millions_production varchar,
	pct_subsidies varchar
	);
	
	
select * from Grain_Subsidies;

	