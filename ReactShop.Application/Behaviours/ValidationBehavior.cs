using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using FluentValidation.Results;
using MediatR;
using Microsoft.Extensions.Logging;
using ReactShop.Infrastructure.Exceptions;

namespace ReactShop.Application.Behaviours
{
    public class ValidationBehavior<TRequest, TModel> : IPipelineBehavior<TRequest, TModel>
        where TRequest : IRequest<TModel>
    {
        private readonly IEnumerable<IValidator<TRequest>> _validators;

        public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
        {
            _validators = validators;
        }

        public Task<TModel> Handle(TRequest request
            , CancellationToken cancellationToken
            , RequestHandlerDelegate<TModel> next
        )
        {
            var failures = _validators
                .Select(v => v.Validate(request))
                .SelectMany(result => result.Errors)
                .Where(f => f != null)
                .ToList();

            if (failures.Any())
            {
                throw new ValidationException(failures);
            }

            return next();
        }
    }
}
