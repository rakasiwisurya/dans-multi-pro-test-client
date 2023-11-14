import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Header, JobList, Search } from "../components";
import { api } from "../utils/api";

const Home = () => {
  const [isJobsLoading, setIsJobsLoading] = useState(true);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const [isHasNext, setIsHasNext] = useState(true);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    description: "",
    location: "",
    fullTime: false,
  });

  useEffect(() => {
    getJobs({});
  }, []);

  const getJobs = async ({ isSearch, isLoadMore, page = 1 }) => {
    if (isSearch) {
      setIsSearchLoading(true);
    } else if (isLoadMore) {
      setIsLoadMoreLoading(true);
    } else {
      setIsJobsLoading(true);
    }

    const params = { page };
    if (form.description) params.description = form.description;
    if (form.location) params.location = form.location;
    if (form.fullTime) params.full_time = form.fullTime;

    try {
      const response = await api.get("/positions", { params });
      setPage(response?.data?.data?.page);
      if (isLoadMore) {
        setJobs((prevState) => [...prevState, ...response?.data?.data?.data]);
      } else {
        setJobs(response?.data?.data?.data);
      }

      if (response?.data?.data?.data?.length <= 0) setIsHasNext(false);

      if (isSearch) {
        setIsSearchLoading(false);
      } else if (isLoadMore) {
        setIsLoadMoreLoading(false);
      } else {
        setIsJobsLoading(false);
      }
    } catch (error) {
      console.error(error);
      if (error?.response?.data) toast.error(error?.response?.data?.message);

      if (isSearch) {
        setIsSearchLoading(false);
      } else if (isLoadMore) {
        setIsLoadMoreLoading(false);
      } else {
        setIsJobsLoading(false);
      }
    }
  };

  const handleChange = (e, type) => {
    if (type === "checked") {
      return setForm((prevState) => ({ ...prevState, [e.target.id]: e.target.checked }));
    }

    setForm((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    await getJobs({ isSearch: true });
  };

  const handleLoadMore = async () => {
    await getJobs({ isLoadMore: true, page: page + 1 });
  };

  return (
    <>
      <Header />
      <Search
        form={form}
        onChange={handleChange}
        isSearchLoading={isSearchLoading}
        onSearch={handleSearch}
      />
      <JobList
        isJobsLoading={isJobsLoading}
        jobs={jobs}
        isLoadMoreLoading={isLoadMoreLoading}
        onLoadMore={handleLoadMore}
        isHasNext={isHasNext}
      />
    </>
  );
};

export default Home;
